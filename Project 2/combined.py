#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Aug  4 17:09:48 2020

@author: p.h.
"""


import os, pymysql.cursors, re, warnings
def checkcombinedcsv():
    inputPath = os.path.join('combined.csv')
    host = 'hinova.cydjkxyol2vm.us-east-2.rds.amazonaws.com'
    port = 3306
    username = 'admin'
    password = 'los011111'
    database = 'novahousingprices'
    connection =pymysql.connect(
        host=host,
        port=port,
        user=username,
        password=password,
        db=database
    )
    cursor = connection.cursor(pymysql.cursors.DictCursor)
    connection.ping(True)
    with warnings.catch_warnings():
        warnings.simplefilter('ignore')
        cursor.execute("DROP TABLE IF EXISTS nova_listings")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS nova_listings (
            sale_type VARCHAR (32) NOT NULL,
            sold_data VARCHAR (32) DEFAULT NULL,
            property VARCHAR (64) NOT NULL,
            address VARCHAR (128) NOT NULL,
            city VARCHAR (64) NOT NULL,
            state VARCHAR (2) NOT NULL,
            zip INT NOT NULL,
            price INT NOT NULL,
            beds INT DEFAULT NULL,
            baths FLOAT NOT NULL,
            location VARCHAR (32) NOT NULL,
            square_foot INT DEFAULT NULL,
            lot_size VARCHAR (12) DEFAULT NULL,
            year_built INT NOT NULL,
            days_on_market INT NOT NULL,
            dollar_per_square_foot INT DEFAULT NULL,
            hoa_per_month FLOAT DEFAULT NULL,
            status VARCHAR (32) NOT NULL,
            next_open_house_start VARCHAR (64) DEFAULT NULL,
            next_open_house_end VARCHAR (64) DEFAULT NULL,
            url VARCHAR (128) DEFAULT NULL,
            source VARCHAR (32) NOT NULL,
            mls VARCHAR (64) DEFAULT NULL,
            favorite VARCHAR (8) DEFAULT NULL,
            interested VARCHAR (8) DEFAULT NULL,
            latitude FLOAT DEFAULT NULL,
            longtitude FLOAT DEFAULT NULL
        )""")
    with open(inputPath, 'r') as f:
        next(f)
        for row in f:
            row = row.strip().split(',')
            for i in range(len(row)):
                if row[i] == '':
                    row[i] = 0
            toExecute = """INSERT INTO nova_listings (sale_type, 
            sold_data, property, address, city, 
            state, zip, price, beds, baths, location, 
            square_foot, lot_size ,year_built, days_on_market,
            dollar_per_square_foot, hoa_per_month, status, 
            next_open_house_start, next_open_house_end,
            url, source, mls, favorite, interested, latitude, longtitude)
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
            """
            cursor.execute(toExecute, (
                row[0], row[1],row[2],
                row[3], row[4], row[5], int(row[6]), float(row[7]),
                float(row[8]), float(row[9]), row[10], int(row[11]), 
                str(row[12]), int(row[13]), int(row[14]), float(row[15]), 
                row[16], row[17], row[18], row[19], row[20], row[21], 
                row[22], row[23], row[24], float(row[25]), float(row[26])))
checkcombinedcsv()