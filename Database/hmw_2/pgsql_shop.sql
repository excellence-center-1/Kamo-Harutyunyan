CREATE DATABASE shop;

\connect shop

CREATE TABLE client (
Name VARCHAR (30) NOT NULL,
Surname VARCHAR (50) NOT NULL,
Phone_number INT UNIQUE NOT NULL,
Cash INT NOT NULL,
PRIMARY KEY (Phone_number));

CREATE TABLE shop (
Name VARCHAR (30) NOT NULL,
Adress VARCHAR (80) UNIQUE NOT NULL,
Phone_number INT UNIQUE NOT NULL,
Cash INT NOT NULL,
PRIMARY KEY (Adress));

CREATE TABLE product (
Name VARCHAR (50) NOT NULL,
Selling_cost INT NOT NULL,
id SERIAL PRIMARY KEY);

CREATE TABLE vendor (
Name VARCHAR (30) NOT NULL,
Surname VARCHAR (50) NOT NULL,
Phone_number INT UNIQUE NOT NULL,
PRIMARY KEY (Phone_number));

CREATE TABLE product_vendor_id (
Product_id VARCHAR (50) NOT NULL,
Vendor_id VARCHAR (50) NOT NULL,
Supply_cost INT NOT NULL,
id SERIAL PRIMARY KEY);

CREATE TABLE client_shop_product_id (
Client_id VARCHAR (50) NOT NULL,
Shop_id VARCHAR (50) NOT NULL,
Product_id VARCHAR (50) NOT NULL,
id SERIAL PRIMARY KEY);

INSERT INTO vendor (name, surname, phone_number)
VALUES ('Artyom', 'Asatryan', 37433271524);

INSERT INTO vendor (name, surname, phone_number)
VALUES ('Hrach', 'Vardanyan', 37499224574);

INSERT INTO product (name, selling_cost, id)
VALUES ('Milk <<Marianna>>', 1200);

INSERT INTO product (name, selling_cost, id)
VALUES ('Milk <<Ashtarak>>', 1500);

INSERT INTO product (name, selling_cost, id)
VALUES ('Icecream <<Bricket>>', 500);

INSERT INTO product (name, selling_cost, id)
VALUES ('Icecream <<Cone>>', 600);

INSERT INTO shop (name, adress, phone_number, cash)
VALUES ('Market Kamo', 'Prospekt', 37494226363, 777250);

INSERT INTO client (name, surname, phone_number, cash)
VALUES ('Anna', 'Mkrtchyan', 37493004800, 7800);

INSERT INTO client (name, surname, phone_number, cash)
VALUES ('Hrach', 'Muradyan', 37477184800, 5500);

INSERT INTO client (name, surname, phone_number, cash)
VALUES ('Tom', 'Shelby', 37477777777, 77777);
