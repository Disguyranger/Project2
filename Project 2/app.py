import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

from sqlalchemy import func, create_engine

app = Flask(__name__)

engine = create_engine("sqlite:///db/project2.sqlite")

@app.route("/")
def home():
    # Render Home Page
    return "WELCOME!"


@app.route("/data")
def data():
    conn = engine.connect()
    
    query = '''
        SELECT PROPERTY_TYPE,
			CITY,
			ZIP_OR_POSTAL_CODE
			
        FROM Home

        GROUP BY ZIP_OR_POSTAL_CODE

        ORDER BY ZIP_OR_POSTAL_CODE, PROPERTY_TYPE
    '''
    
    results_df = pd.read_sql(query, con=conn)
    
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json




# Query the database and send the jsonified results
@app.route("/send", methods=["GET", "POST"])
def send():
    conn = engine.connect()

    if request.method == "POST":

        property_type = request.form["homeType"]
        property_address = request.form["homeAddress"]
        city = request.form["homeCity"]
        state = request.form["homeState"]
        zip_code = request.form["homeZipCode"]
        square_feet = request.form["homeSquareFeet"]
        first_name = request.form["firstName"]
        last_name = request.form["lastName"]
        phone_number = request.form["phoneNumber"]

        home_df = pd.DataFrame({
            'Property Type': [property_type],
            'Property Address': [property_address],
            'City': [city],
            'State': [state],
            'Zip Code': [zip_code],
            'Square Feet': [square_feet],
            'First Name': [first_name],
            'Last Name': [last_name],
            'Phone': [phone_number],
        })

        home_df.to_sql('Home', con=conn, if_exists='append', index=False)

        return redirect("/", code=302)

    conn.close()

    return render_template("form.html")








if __name__ == '__main__':
    app.run(debug=True)