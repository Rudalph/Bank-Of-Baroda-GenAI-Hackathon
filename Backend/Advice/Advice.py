import os
from flask import Flask, jsonify, request
from dotenv import load_dotenv
from langchain_community.graphs import Neo4jGraph
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains import GraphCypherQAChain
from flask_cors import CORS


gemini_api = "AIzaSyC5agUKvQR7gBuutdV0FSo0tpz2MRn8uL4"
hf_api = "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"
neo4j_url = "neo4j+s://a40eb605.databases.neo4j.io"
neo4j_user = "neo4j"
neo4j_password ="J4J5mYWI0EJoBrU2zTgX8oGmPxhpJ25BExlu80rPQ2s"

# Initialize Neo4jGraph instance
graph = Neo4jGraph(neo4j_url, neo4j_user, neo4j_password)
graph.refresh_schema()

# Initialize language model
llm = ChatGoogleGenerativeAI(model="gemini-pro", google_api_key=gemini_api, temperature=0)
chain = GraphCypherQAChain.from_llm(graph=graph, llm=llm, verbose=True)

# Create Flask application
app = Flask(__name__)
CORS(app)

# Route to handle fetching brand details based on generic name
@app.route('/', methods=['POST'])
def get_brand_details():
    # Get input value from frontend
    data = request.json
    print(data)
    TravelOffer=data.get('travel')
    HealthOffer=data.get('health')
    EductionOffer=data.get('education')
    LifestyleOffer=data.get('lifestyle')
    FoodOffer=data.get('food')
    ShoppingOffer=data.get('shopping')
    EntertainmentOffer=data.get('entertainment')
    
    values = {
        'TravelOffer': int(TravelOffer) if TravelOffer.isdigit() else 0,
        'HealthOffer': int(HealthOffer) if HealthOffer.isdigit() else 0,
        'EductionOffer': int(EductionOffer) if EductionOffer.isdigit() else 0,
        'LifestyleOffer': int(LifestyleOffer) if LifestyleOffer.isdigit() else 0,
        'FoodOffer': int(FoodOffer) if FoodOffer.isdigit() else 0,
        'ShoppingOffer': int(ShoppingOffer) if ShoppingOffer.isdigit() else 0,
        'EntertainmentOffer': int(EntertainmentOffer) if EntertainmentOffer.isdigit() else 0,
    }

    # Find the top 3 maximum values with their variable names
    top_3_values = sorted(values.items(), key=lambda x: x[1], reverse=True)[:3]
    print(top_3_values)
    

    # Construct Cypher query to get generic name for the given brand name
    cypher_query1 = f"MATCH (offer:{top_3_values[0][0]}) RETURN offer.name, offer.details, offer.validity, offer.code, offer.link"
    result1 = graph.query(cypher_query1)
    # print(result1)
    
    cypher_query2 = f"MATCH (offer:{top_3_values[1][0]}) RETURN offer.name, offer.details, offer.validity, offer.code, offer.link"
    result2 = graph.query(cypher_query2)
    # print(result2)
    
    cypher_query3 = f"MATCH (offer:{top_3_values[2][0]}) RETURN offer.name, offer.details, offer.validity, offer.code, offer.link"
    result3 = graph.query(cypher_query3)
    # print(result3)   
    
    all_offers = {
        top_3_values[0][0]: result1,
        top_3_values[1][0]: result2,
        top_3_values[2][0]: result3
    } 
    
    print(all_offers)
    
    if all_offers:
        return jsonify(all_offers)
    else:
        return jsonify({'error': 'Brand not found'}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5006)
