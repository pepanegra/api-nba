import { pool } from "./db.js";
import { app } from "./app.js";

// obtener jugador por id
app.get("/player/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query(
      `SELECT * FROM jugadores_nba where id = $1 `,
      [id]
    );
  } catch (error) {}
});
