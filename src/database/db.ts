import { Pool } from "pg";

const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "starfighters",
  password: "",
  port: 55456,
});

export default db;
