-- Drops database if it already exists
DROP DATABASE IF EXISTS bamazon_db;

-- creates database
CREATE DATABASE bamazon_db;

-- affect bamazon_db
USE bamazon_db;

-- creates table within the database
CREATE TABLE products (
	-- columns
    item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price INTEGER(11) DEFAULT 0,
	stock_quantity INTEGER(11) NOT NULL,
    PRIMARY KEY(item_id)
);

-- 10 sample products
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Pineapple", "Fruit", 10, 9);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Pear", "Fruit", 15, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Lasagna", "Dinner", 20, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Meatloaf", "Dinner", 25, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Apple Pie", "Dessert", 10, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Cookies", "Dessert", 15, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Fruit Loops", "Breakfast", 20, 6);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Captain Crunch", "Breakfast", 25, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Sandwich", "Lunch", 10, 7);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Salad", "Lunch", 15, 10);

SELECT * FROM products;