CREATE DATABASE shop;

\connect shop

CREATE TABLE client (
Name VARCHAR (30) NOT NULL,
Surname VARCHAR (50) NOT NULL,
Phone_number VARCHAR (12) check(phone_number like '+374________') UNIQUE,
Gmail VARCHAR (60) check (gmail like '%@gmail.com') UNIQUE,
Cash INT NOT NULL,
id SERIAL PRIMARY KEY);

CREATE TABLE shop (
Name VARCHAR (30) NOT NULL,
Adress VARCHAR (80) UNIQUE NOT NULL,
Phone_number VARCHAR (12) check(phone_number like '+374________') UNIQUE,
Gmail VARCHAR (60) check (gmail like '%@gmail.com') UNIQUE,
Cash INT NOT NULL,
id SERIAL PRIMAR KEY);

CREATE TABLE product (
Name VARCHAR (50) NOT NULL,
Description VARCHAR (150),
id SERIAL PRIMARY KEY);

CREATE TABLE vendor (
Name VARCHAR (30) NOT NULL,
Surname VARCHAR (50) NOT NULL,
Phone_number VARCHAR (12) check(phone_number like '+374________') UNIQUE,
Gmail VARCHAR (60) check (gmail like '%@gmail.com') UNIQUE,
id SERIAL PRIMARY KEY);

CREATE TABLE productID_vendorID_shopID_cost (
Product_id VARCHAR (10) NOT NULL,
Vendor_id VARCHAR (10) NOT NULL,
Vendor_id VARCHAR (10) NOT NULL,
Supply_cost INT NOT NULL,
id SERIAL PRIMARY KEY);

CREATE TABLE clientID_shopID_productID_cost (
Client_id VARCHAR (10) NOT NULL,
Shop_id VARCHAR (10) NOT NULL,
Product_id VARCHAR (10) NOT NULL,
Selling_price INT NOT NULL,
id SERIAL PRIMARY KEY);

INSERT INTO vendor (name, surname, phone_number, gmail)
VALUES ('Artyom', 'Asatryan', '+37499641030', 'hello_world@gmail.com');

INSERT INTO vendor (name, surname, phone_number)
VALUES ('Hrach', 'Muradyan', '+37499989796', 'kisabac_lusamutner_come@gmail.com');

INSERT INTO product (name, description)
VALUES ('Milk <<Marianna>>', 'For children');

INSERT INTO product (name, description)
VALUES ('Milk <<Ashtarak>>', 'For 10+ years old');

INSERT INTO product (name, description)
VALUES ('Icecream <<Bricket>>', 'Chocolate');

INSERT INTO product (name, description)
VALUES ('Icecream <<Cone>>', 'Vanile');

INSERT INTO shop (name, adress, phone_number, gmail, cash)
VALUES ('Market Kamo', 'Prospekt', '+37477777777', 'kamo.harutyunyan.ec@gmail.com',777250);

INSERT INTO client (name, surname, phone_number, gmail, cash)
VALUES ('Anna', 'Mkrtchyan', '+37493004800', 'hunvar200@gmail.com', 7800);

INSERT INTO client (name, surname, phone_number, gmail, cash)
VALUES ('Gor', 'Vardanyan', '+37477812385', 'mi_mati_ujy@gmail.com', 500);

INSERT INTO client (name, surname, phone_number, gmail, cash)
VALUES ('Tom', 'Shelby', '+37499666666', 'ov_inch_asi_inqna@gmail.com', 66665);
