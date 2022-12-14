import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

async function main() {
  dotenv.config();
  const app = express();

  app.use(cors());
  app.use(json());

  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Servidor subiu na porta: ${PORT}`);
  });
}

main().catch(console.error);
