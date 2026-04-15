CREATE DATABASE IF NOT EXISTS ecommerce_db;
USE ecommerce_db;

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('buyer', 'admin', 'seller') DEFAULT 'buyer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Products Table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seller_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (seller_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- 3. Orders Table
CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    total_amount DECIMAL(10, 2),
    status ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled') DEFAULT 'Pending',
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 4. Seed Data (Critical for your app.py logic)
-- This creates the user that seller_id=1 refers to
INSERT IGNORE INTO users (id, name, email, password, role) 
VALUES (1, 'Default Seller', 'seller@pbssd.gov.in', 'pbssd123', 'seller');

INSERT IGNORE INTO products (seller_id, name, price, description, stock, image_url) 
VALUES (1, 'Sample Laptop', 45000.00, 'High performance machine', 5, 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853');
create Table sign_up(
User_image BLOB,
Full_name VARCHAR(100),
Email_address VARCHAR(100),
Phone bigint,
Location text,
Password VARCHAR(100));

--by soumalyo:-
create Table IF NOT EXISTS product_datails{
    product_id int AUTO_INCREMENT  Primary key,
    category_id int unique not null,
    product_name varchar(20) not null,
    description text not null,
    image_url text not null,
    rating int,
    stock int not null,
    created_at timestamp not null
};

CREATE TABLE IF NOT EXISTS category_details{
    category_id int AUTO_INCREMENT Primary key,
    category_name varchar(20) not null,
    icon text not null,
    slug varchar(30) not null,
};

CREATE TABLE IF NOT EXISTS seller_details{
    seller_id int AUTO_INCREMENT Primary key,
    user_id int unique not null,
    shop_name varchar(30) not null,
    contact varchar(50) not null,
    status enum('active', 'inactive') default 'active',
    joined_at timestamp not null
}

CREATE TABLE IF NOT EXISTS CART_ITEMS{
    CART_ITEM_ID int AUTO_INCREMENT Primary key,
    USER_ID int UNIQUE not null,
    PRODUCT_ID int not null,
    QUANTITY int not null,
    ADDED_AT timestamp not null
}

CREATE TABLE IF NOT EXISTS ORDER_DETAILS{
    ORDER_ID INT AUTO_INCREMENT Primary key,
    USER_ID INT NOT NULL,
    status enum('active', 'inactive') default 'active',
    TOTAL_AMOUNT DECIMAL(10, 2) NOT NULL,
    PAYMENT_METHOD enum('credit_card', 'debit_card', 'paypal', 'cash_on_delivery') NOT NULL,
    PLACED_AT TIMEESTAMP NOT NULL
};

CREATE TABLE IF NOT EXISTS FAVOURITE_PRODUCTS{
    FAVOURITE_ID int AUTO_INCREMENT Primary key,
    USER_ID int UNIQUE not null,
    PRODUCT_ID int not null,
    SAVED_AT timestamp not null
}

CREATE TABLE IF NOT EXISTS ORDER_ITEMS{
    ORDER_ITEM_ID INT AUTO_INCREMENT PRIMARY KEY,
    ORDER_ID INT NOT NULL,
    PRODUCT_ID NOT NULL,
    QUANTITY INT NOT NULL,
    UNIT_PRICE DECIMAL(10, 2) NOT NULL,
    SUBTOTAL DECIMAL(10, 2) NOT NULL,
}