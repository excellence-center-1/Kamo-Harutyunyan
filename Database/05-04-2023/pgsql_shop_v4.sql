CREATE DATABASE shop;

\connect shop

CREATE TABLE client (
name VARCHAR (30) NOT NULL,
surname VARCHAR (50) NOT NULL,
password VARCHAR (150) CHECK (char_length(password) >= 8),
phone_number VARCHAR (12) UNIQUE,
gmail VARCHAR (60) CHECK (gmail LIKE '%@gmail.com') UNIQUE,
cash INT NOT NULL,
id SERIAL PRIMARY KEY);

CREATE TABLE shop (
name VARCHAR (30) NOT NULL,
adress VARCHAR (80) UNIQUE NOT NULL,
phone_number VARCHAR (12) UNIQUE,
gmail VARCHAR (60) check (gmail like '%@gmail.com') UNIQUE,
cash INT NOT NULL,
id SERIAL PRIMAR KEY);

CREATE TABLE product (
name VARCHAR (50) NOT NULL,
description VARCHAR (150),
id SERIAL PRIMARY KEY);

CREATE TABLE vendor (
name VARCHAR (30) NOT NULL,
surname VARCHAR (50) NOT NULL,
phone_number VARCHAR (12) UNIQUE,
gmail VARCHAR (60) check (gmail like '%@gmail.com') UNIQUE,
id SERIAL PRIMARY KEY);

CREATE TABLE productID_vendorID_shopID_cost (
product_id VARCHAR (10) NOT NULL,
vendor_id VARCHAR (10) NOT NULL,
vendor_id VARCHAR (10) NOT NULL,
supply_cost INT NOT NULL,
id SERIAL PRIMARY KEY);

CREATE TABLE clientID_shopID_productID_cost (
client_id VARCHAR (10) NOT NULL,
shop_id VARCHAR (10) NOT NULL,
product_id VARCHAR (10) NOT NULL,
selling_price INT NOT NULL,
selling_date VARCHAR (30) NOT NULL,
id SERIAL PRIMARY KEY);

ALTER TABLE shop ADD CONSTRAINT phone_number_check CHECK(phone_number NOT SIMILAR TO '%[a-zA-Z]%' AND phone_number similar TO '%[0-9]%');

ALTER TABLE vendor ADD CONSTRAINT phone_number_check CHECK(phone_number NOT SIMILAR TO '%[a-zA-Z]%' AND phone_number similar TO '%[0-9]%');

ALTER TABLE client ADD CONSTRAINT phone_number_check CHECK(phone_number NOT SIMILAR TO '%[a-zA-Z]%' AND phone_number similar TO '%[0-9]%');

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

INSERT INTO client (name, surname, password, phone_number, gmail, cash)
VALUES ('Anna', 'Mkrtchyan', SHA256('Pass123'), '+37493004800', 'hunvar200@gmail.com', 7800);

INSERT INTO client (name, surname, password, phone_number, gmail, cash)
VALUES ('Gor', 'Vardanyan', SHA256('Pass123'), '+37477812385', 'mi_mati_ujy@gmail.com', 500);

INSERT INTO client (name, surname, password, phone_number, gmail, cash)
VALUES ('Tom', 'Shelby', SHA256('Pass777'), '+37499666666', 'ov_inch_asi_inqna@gmail.com', 66665);
