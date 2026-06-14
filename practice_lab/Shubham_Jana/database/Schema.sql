-- Active: 1771548609986@@127.0.0.1@3306@mysql
show databases;
create DATABASE urban_mart;
use urban_mart;
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    image_url VARCHAR(500),
    seller_id INT DEFAULT 1
);