import { Request, Response } from 'express';
import { pool } from '../database/db'; 


export const getAllCharacter = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM characters');
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching characters');
  }
};

export const getCharacterById  = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [rows]: [any[], any] = await pool.execute('SELECT * FROM characters WHERE id = ?', [id]);
    if (rows.length === 0) {
      res.status(404).send('Character not found');
    } else {
      res.status(200).json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching character');
  }
};