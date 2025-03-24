import pool from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Metodo non consentito' });
  }

  try {
    const [rows] = await pool.query('SELECT * FROM faq');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Errore nel recupero delle faq:', error);
    res.status(500).json({ message: 'Errore nel server' });
  }
}