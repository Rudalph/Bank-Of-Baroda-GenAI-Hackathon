from pymongo import MongoClient
from flask import Flask, request, jsonify
from langchain_community.vectorstores import MongoDBAtlasVectorSearch
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.retrievers import ContextualCompressionRetriever
from langchain.retrievers.document_compressors import LLMChainExtractor
import warnings
import os
from urllib.parse import quote_plus
from flask_cors import CORS
import re


app = Flask(__name__)
CORS(app)

# Environment Variables for API keys
os.environ["GOOGLE_API_KEY"] = "AIzaSyC5agUKvQR7gBuutdV0FSo0tpz2MRn8uL4"
GOOGLE_API_KEY="AIzaSyC5agUKvQR7gBuutdV0FSo0tpz2MRn8uL4"


# Encode MongoDB credentials
username = quote_plus("gonsalvesrudalph")
password = quote_plus("Rudalph@2003")
mongodb_conn_string = f"mongodb+srv://{username}:{password}@cluster0.cfdklwf.mongodb.net/"
db_name = "BoB-Faqs"
collection_name = "search_col"
index_name = "vsearch_index"

# Initialize embeddings
embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")

# Filter out the UserWarning from langchain
warnings.filterwarnings("ignore", category=UserWarning, module="langchain.chains.llm")

# Initialize MongoDB python client
client = MongoClient(mongodb_conn_string)
collection = client[db_name][collection_name]

# Initialize vector store
vectorStore = MongoDBAtlasVectorSearch(
    collection, embeddings, index_name=index_name
)

# Initialize LLM
llm = ChatGoogleGenerativeAI(model="models/gemini-1.5-pro-latest", temperature=0.7)
compressor = LLMChainExtractor.from_llm(llm)

compression_retriever = ContextualCompressionRetriever(
    base_compressor=compressor,
    base_retriever=vectorStore.as_retriever()
)


def clean_response(response):
    # Remove special characters and unwanted parts
    clean_text = re.sub(r'```|>>>|Extracted relevant parts:', '', response)
    return clean_text.strip()



@app.route('/ask', methods=['POST'])
def ask_question():
    data = request.json
    query=data.get('question')
    # query=f"Generate {text}"
    # query = data.get('question', 'Generate CONSENT FORM FOR AADHAAR SEEDING AND AUTHENTICATION')

    print("\nYour question:")
    print("-------------")
    print(query)

    # Perform a similarity search
    docs = vectorStore.max_marginal_relevance_search(query, K=1)

    print("---------------")

    # Get AI response
    compressed_docs = compression_retriever.get_relevant_documents(query)
    response_content = compressed_docs[0].page_content if compressed_docs else "No relevant documents found."

    cleaned_response = clean_response(response_content)

    # model = genai.GenerativeModel('gemini-pro')
    # response = model.generate_content(f"Rewrite ${response_content} as it is only where asked for mobile number add 7249735828, account number add 9890996568, Branch add Nallasopara (Make sure do not generate any other text)")
    # response_text=response.text
    print(cleaned_response)

    return jsonify({"answer": cleaned_response})

if __name__ == '__main__':
    app.run(debug=True, port=5002)
