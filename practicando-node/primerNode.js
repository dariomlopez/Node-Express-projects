import express, { request, response } from "express";
import dotenv from "dotenv";
import{usersDatabase} from "./database.js"

const expressApp = express(), 
port = 3000, 
host = "localhost";

/** Middlewares */
expressApp.use(express.json());
expressApp.use(express.text());

/** Detalles de la cuenta a partir de identificador */
expressApp.get("/account/:account_id", (request, response) => {
  request.params.account_id;
  response.send();
});

/** Crear una cuenta nueva */
expressApp.post("/account", (request, response) => {

})

/** Actualizar una cuenta */
expressApp.patch("/account", (request, response) => {

})

/** Eliminar cuenta */
expressApp.delete("/account", (request, response) => {

})



expressApp.listen(port, host, () => {
  console.log(`Servidor funcionando en http://${host}:${port}`);
});