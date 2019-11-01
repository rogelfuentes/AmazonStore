DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products
(
    item_id INTEGER NOT NULL
    AUTO_INCREMENT,
  product_name VARCHAR
    (50) NULL,
  department_name VARCHAR
    (50) NULL,
  price DECIMAL
    (10,4) NULL,
  stock_quantity INTEGER
    (10) NULL,
  PRIMARY KEY
    (item_id)
);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Mountain Bike", "Sport", "450.00", 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Camping Tent", "Outdoor Activities", "24.94", 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Camping Bag Pack", "Outdoor Activities", "40.70", 50);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Sleeping Bag", "Outdoor Activities", "20.95", 200);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("SAE 5W-30 Motor Oil 5 QT", "Car Shop", "22.94", 300);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Oil Filter", "Car Shop", "14.30", 20);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Car Batery 750A", "Car Shop", "158.45", 40);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("TV 4K Ultra HD", "Electronics", "127.20", 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("MacBookPro", "Electronics", "2500.00", 30);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Canon Camera 60D", "Electronics", "820.50", 100);


    SELECT *
    FROM products;
