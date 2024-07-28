import express, { Request, Response } from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { getCharacterById  } from "./endpoints/characters";
import { getAllCharacter } from "./endpoints/characters";
import {  getItemsById } from "./endpoints/items";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.use(express.json());

// Endpoint to test conection with database
app.get('/api/test-connection', async (req: Request, res: Response) => {
  try {
    await pool.query('SELECT 1');
    res.status(200).send('Connection to the database was successful!');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).send('Error connecting to the database');
  }
});

app.get('/api/character/:id', getCharacterById);
app.get('/api/character', getAllCharacter);
app.get('/api/character/:characterId/items', getItemsById);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
