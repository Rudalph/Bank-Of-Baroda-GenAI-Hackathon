from flask import Flask, request, jsonify
from langchain import PromptTemplate
from langchain.docstore.document import Document
from langchain_community.document_loaders import WebBaseLoader
from langchain.schema import StrOutputParser
from langchain.schema.runnable import RunnablePassthrough
from langchain_community.vectorstores import Chroma
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from flask_cors import CORS
import os

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Set Google API Key
os.environ["GOOGLE_API_KEY"] = "AIzaSyC5agUKvQR7gBuutdV0FSo0tpz2MRn8uL4"

# Define URLs and load documents
urls = [
    "https://www.bankofbaroda.in/faqs/cards",
    "https://www.bankofbaroda.in/faqs/loans-and-advances",
    "https://www.bankofbaroda.in/customer-support",
    "https://www.bankofbaroda.in/locate-us/branches"
]

all_docs = []
for url in urls:
    loader = WebBaseLoader(url)
    docs = loader.load()
    for doc in docs:
        text_content = doc.page_content
        all_docs.append(Document(page_content=text_content, metadata={"source": url}))

# Initialize embeddings and vector store
gemini_embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")

vectorstore = Chroma.from_documents(
    documents=all_docs,
    embedding=gemini_embeddings,
    persist_directory="./chroma_db"
)

vectorstore_disk = Chroma(
    persist_directory="./chroma_db",
    embedding_function=gemini_embeddings
)

retriever = vectorstore_disk.as_retriever(search_kwargs={"k": 1})

# Initialize language model and prompt template
llm = ChatGoogleGenerativeAI(model="models/gemini-1.5-pro-latest", temperature=0.7, top_p=0.85)
llm_prompt_template = """You are an assistant for question-answering tasks.
Use the following context to answer the question.
If you don't know the answer, just say that you don't know.
Use five sentences maximum and keep the answer concise.\n
Question: {question} \nContext: {context} \nAnswer:"""

llm_prompt = PromptTemplate.from_template(llm_prompt_template)

def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)

rag_chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | llm_prompt
    | llm
    | StrOutputParser()
)

@app.route('/ask', methods=['POST'])
def ask_question():
    data = request.get_json()
    question = data.get("question")
    if not question:
        return jsonify({"error": "No question provided"}), 400
    
    response = rag_chain.invoke(question)
    return jsonify({"answer": response})

if __name__ == "__main__":
    app.run(debug=True, port=5002)
