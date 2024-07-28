CREATE DATABASE IF NOT EXISTS zumbi_mobility;

USE zumbi_mobility;

CREATE TABLE IF NOT EXISTS characters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    description TEXT NOT NULL,
    skills TEXT,
    special_needs TEXT,
    diversity_representation TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    character_id INT,
    item_name VARCHAR(100) NOT NULL,
    item_description TEXT,
    quantity INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE
);
