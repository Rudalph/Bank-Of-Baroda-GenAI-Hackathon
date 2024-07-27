import argparse
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

app = Flask(__name__)
CORS(app)

# Environment Variables for API keys
os.environ["GOOGLE_API_KEY"] = "AIzaSyC5agUKvQR7gBuutdV0FSo0tpz2MRn8uL4"

# Encode MongoDB credentials
username = quote_plus("gonsalvesrudalph")
password = quote_plus("Rudalph@2003")
mongodb_conn_string = f"mongodb+srv://{username}:{password}@cluster0.vl7ltvv.mongodb.net/"
db_name = "demo"
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
llm = ChatGoogleGenerativeAI(model="models/gemini-1.5-pro-latest", temperature=0)
compressor = LLMChainExtractor.from_llm(llm)

compression_retriever = ContextualCompressionRetriever(
    base_compressor=compressor,
    base_retriever=vectorStore.as_retriever()
)

@app.route('/ask', methods=['POST'])
def ask_question():
    data = request.json
    text=data.get('question')
    query=f"Generate {text}"
    # query = data.get('question', 'Generate CONSENT FORM FOR AADHAAR SEEDING AND AUTHENTICATION')

    print("\nYour question:")
    print("-------------")
    print(query)

    # Perform a similarity search
    docs = vectorStore.max_marginal_relevance_search(query, K=1)

    print("---------------")

    # Get AI response
    compressed_docs = compression_retriever.get_relevant_documents(query)
    response = compressed_docs[0].page_content if compressed_docs else "No relevant documents found."

    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True, port=5003)
