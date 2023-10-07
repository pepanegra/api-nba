import { pool } from "./db.js";
import "dotenv/config";
import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

//obterner todos los jugadores
app.get("/player", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM jugadores_nba");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

// obtener jugador por id
app.get("/player/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query(
      `SELECT * FROM jugadores_nba where id = $1 `,
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Jugador no existente" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

// Crear un jugador
app.post("/player", async (req, res) => {
  const {
    nombre,
    equipo,
    posicion,
    altura,
    peso,
    edad,
    nacionalidad,
    colegio,
    draft,
    puntos_por_partido,
    rebotes_por_partido,
    asistencias_por_partido,
    eficiencia,
  } = req.body;
  if (typeof nombre !== "string")
    res.status(400).json({
      mensaje: "Mala peticion",
    });
  try {
    const result = await pool.query(
      `
        INSERT INTO jugadores_nba(nombre, equipo, posicion, altura, peso, edad, nacionalidad, colegio, draft, puntos_por_partido, rebotes_por_partido, asistencias_por_partido, eficiencia)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        RETURNING *
        `,
      [
        nombre,
        equipo,
        posicion,
        altura,
        peso,
        edad,
        nacionalidad,
        colegio,
        draft,
        puntos_por_partido,
        rebotes_por_partido,
        asistencias_por_partido,
        eficiencia,
      ]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
});

app.patch("/player/:id", async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const values = [];
    let setClause = "";

    for (const propiedad in updates) {
      if (updates.hasOwnProperty(propiedad)) {
        values.push(updates[propiedad]);
        setClause += `${propiedad} = $${values.length}, `;
      }
    }

    setClause = setClause.slice(0, -2);

    const query = `UPDATE jugadores_nba SET ${setClause} WHERE id = $${
      values.length + 1
    }`;
    values.push(id);

    const result = await pool.query(query, values);

    res.json({
      mensaje: "Peticion exitosa",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
});

app.delete("/player/:id", async (req, res) => {
  const id = req.params.id;

  try {
    if (id === 0) {
      res.status(404).json({ error: "Jugador no encontrado" });
    }
    const result = await pool.query("DELETE FROM jugadores_nba WHERE id = $1", [
      id,
    ]);

    res.status(200).json({ mensaje: "peticion exitosa" });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
});

app.use((req, res) => {
  res.status(404).json({
    message: "Recurso no encontrado",
  });
});

app.listen(3000, () => {
  console.log(`servidor corriendo en el puerto ${3000}`);
});
