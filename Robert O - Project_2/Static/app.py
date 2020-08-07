import pandas as pd
import os
os.getcwd()
import sqlalchemy
from sqlalchemy import create_engine
import pymysql
host = 'hinova.cydjkxyol2vm.us-east-2.rds.amazonaws.com'
port = 3306
username = 'admin'
password = 'los011111'
database = 'novahousingprices'
# Flask
from flask import Flask, request, render_template, jsonify
# PyMySQL
import pymysql
# JSON
import json
# Configure MySQL connection and connect 
pymysql.install_as_MySQLdb()
engine = create_engine(f"mysql://{username}:{password}@{host}:{port}/{database}")
# Initialize Flask application
app = Flask(__name__)
# Set up your default route
@app.route('/')
def home():
    return 'WELCOME!'
@app.route('/api/data/')
def get_choro():
    # Establish DB connection
    conn = engine.connect()
    query = '''
        SELECT `PROPERTY TYPE`, 'CITY',`ZIP OR POSTAL CODE`
            
        FROM
            nova_listings
        '''
    choro_data = pd.read_sql(query, con=conn)
    choro_json = choro_data.to_json(orient='records')
    #dictionary = {i: d for i, d in enumerate(student_json)}
    conn.close()
    return choro_json
if __name__ == "__main__":
    app.run(debug=True)

    