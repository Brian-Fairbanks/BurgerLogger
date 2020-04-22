DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name VARCHAR(60) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0
);


INSERT INTO burgers(burger_name, devoured)
VALUES ("double bacon cheeseburger", 1),
("avocado vegi burger",0),
("chili cheese bacon and grilled onion burger",1);