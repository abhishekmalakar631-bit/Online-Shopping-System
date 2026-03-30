CREATE DATABASE IF NOT EXISTS ecommerce_db;
USE ecommerce_db;

-- 1. Users Table (Customers)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin', 'seller') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Products Table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seller_id INT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    image_url VARCHAR(255),
    FOREIGN KEY (seller_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 3. Orders Table
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    total_amount DECIMAL(10, 2),
    status ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled') DEFAULT 'Pending',
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
USE ecommerce_db;

-- Drop the old simple table
DROP TABLE IF EXISTS products;

-- Create the professional version
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    stock INT DEFAULT 0  -- This fixes the 'stock' error!
);

-- Add a test item with stock
INSERT INTO products (name, price, description, image_url, stock) 
VALUES ('MacBook Air M1', 75000.00, 'TL Edition Laptop', 'https://images.unsplash.com/photo-1517336714460-d46f5c862140', 10);

USE ecommerce_db;

-- Force the column to exist if it somehow didn't save
ALTER TABLE products ADD COLUMN IF NOT EXISTS stock INT DEFAULT 0;

-- Update all existing products to have a stock of 10
UPDATE products SET stock = 10;

-- Final check: Run this and make sure you see a 'stock' column in the results
SELECT * FROM products;
USE ecommerce_db;

-- We need to add seller_id to match your app.py logic
ALTER TABLE products 
ADD COLUMN seller_id INT DEFAULT 1 AFTER id,
ADD COLUMN IF NOT EXISTS stock INT DEFAULT 0;

USE ecommerce_db;

-- Add seller_id
ALTER TABLE products ADD COLUMN seller_id INT DEFAULT 1 AFTER id;

-- Add stock (This is the one your code is dying for!)
ALTER TABLE products ADD COLUMN stock INT DEFAULT 0;

-- Let's check if it worked
DESCRIBE products;