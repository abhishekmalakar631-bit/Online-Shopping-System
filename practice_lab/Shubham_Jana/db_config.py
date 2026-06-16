import mysql.connector   

import mysql.connector

import mysql.connector

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="Sulekha",  # Your updated password
        database="my_practice" # Or your online shopping database name
    )
