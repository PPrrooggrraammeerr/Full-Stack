CREATE DATABASE to_do;

USE to_do;

CREATE TABLE task (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255),
    completed BOOLEAN DEFAULT FALSE
);
