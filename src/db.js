import pg from "pg";
import "dotenv/config";

export const pool = new pg.Pool({
    host: process.env.HOST_DB,
    port: 5432,
    database: process.env.NAME_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    ssl: {
      rejectUnauthorized: true,
    },
})
