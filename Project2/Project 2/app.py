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

@app.route("/")
def home():
    # Render Home Page
    return "WELCOME!"

#------------------------------------------------------------------------------------------------------------------------------------------------------
@app.route("/data/json")
def data():
    conn = engine.connect()
    
    query = '''
        SELECT *
			
        FROM
            nova_listings
    '''
    
    results_df = pd.read_sql(query, con=conn)
    
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json


#------------------------------------------------------------------------------------------------------------------------------------------------------

# Query the database and send the jsonified results
@app.route("/send", methods=["GET", "POST"])
def send():
    conn = engine.connect()

    if request.method == "POST":
        sale_type = request.form['saleType']
        sold_date = request.form['soldDate']
        property_type = request.form["propertyType"]

        property_address = request.form["homeAddress"]
        city = request.form["homeCity"]
        state = request.form["homeState"]

        zip_code = request.form["homeZipCode"]
        price = request.form['homePrice']
        beds = request.form['beds']
       
        baths = request.form['baths']
        location = request.form['location']
        square_feet = request.form["homeSquareFeet"]
        
        lot_size = request.form['lotSize']
        year_built = request.form['yearBuilt']
        days_in_market = request.form['DaysInMarket']
        
        price_per_square_feet = request.form['PricePerSquareFeet']
        hoa = request.form['HOA']
        status = request.form['status']
        
        open_house_start_time = request.form['openHouseStart']
        open_house_closing_time = request.form['openHouseClosing']
        url = request.form['URL']
        
        source = request.form['source']
        mls = request.form['MLS']
        favorite = request.form['Favorite']
        
        interested = request.form['interested']
        latitude = request.form['LAT']
        longitude = request.form['LON']
        
        first_name = request.form['firstName']
        last_name = request.form['lastName']
        phone = request.form['phone']

 

        home_df = pd.DataFrame({
            'SALE TYPE': [sale_type],
            'SOLD DATE': [sold_date],
            'PROPERTY TYPE': [property_type],

            'ADDRESS': [property_address],
            'CITY': [city],
            'STATE OR PROVINCE': [state],

            'ZIP OR POSTAL CODE': [zip_code],
            'PRICE': [price],
            'BEDS': [beds],

            'BATHS': [baths],
            'LOCATION': [location],
            'SQUARE FEET': [square_feet],

            'LOT SIZE': [lot_size],
            'YEAR BUILT':[year_built],
            'DAYS ON MARKET':[days_in_market],

            '$/SQUARE FEET': [price_per_square_feet],
            'HOA/MONTH': [hoa],
            'STATUS': [status],

            'NEXT OPEN HOUSE START TIME': [open_house_start_time],
            'NEXT OPEN HOUSE END TIME': [open_house_closing_time],
            'URL': [url],

            'SOURCE': [source],
            'MLS#': [mls],
            'FAVORITE': [favorite],

            'INTERESTED': [interested],
            'LATITUDE': [latitude],
            'LONGITUDE': [longitude],

            'FIRST NAME': [first_name],
            'LAST NAME': [last_name],
            'PHONE': [phone]
        })

        home_df.to_sql('nova_listings', con=conn, if_exists='append', index=False)

        #return redirect("/", code=302)

    conn.close()

    return render_template("form.html")





#------------------------------------------------------------------------------------------------------------------------------------------------------


if __name__ == '__main__':
    app.run(debug=True)