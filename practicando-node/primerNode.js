import express, { request, response } from "express";
import dotenv from "dotenv";
import{usersDatabase} from "./database.js";

const expressApp = express(), 
port = 3000, 
host = "localhost";

/** Middlewares */
expressApp.use(express.json());
expressApp.use(express.text());

expressApp.listen(port, host, () => {
  console.log(`Servidor funcionando en http://${host}:${port}`);
});