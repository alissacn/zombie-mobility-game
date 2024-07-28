import { Request, Response } from 'express';
import { pool } from '../database/db'; 


export const getItemsById = async (req: Request, res: Response) => {
        const { characterId } = req.params;
        try {
          const [rows]: [any[], any] = await pool.execute('SELECT * FROM items WHERE character_id = ?', [characterId]);
          if (rows.length === 0) {
            res.status(404).send('No items found for this character');
          } else {
            res.status(200).json(rows);
          }
        } catch (error) {
          console.error(error);
          res.status(500).send('Error fetching items');
        }
      };