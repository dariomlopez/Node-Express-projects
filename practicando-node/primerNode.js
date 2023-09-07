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
expressApp.get("/account/:guid", (request, response) => {
  const { guid } = request.params;
  const user = usersDatabase.find(user => user.guid === guid
  );
  if (!user) {
    return response.status(404).send();
  } else {
  response.send(user);
  }
});

/** Crear una cuenta nueva */
expressApp.post("/account", (request, response) => {

});

/** Actualizar una cuenta */
expressApp.patch("/account/:guid", (request, response) => {
  const { guid } = request.params;
  const user = usersDatabase.find(user => user.guid === guid
  );
  if (!user) {
    response.status(404).send();
  } else {
  response.send(user);
  }
});

/** Eliminar cuenta */
expressApp.delete("/account/:guid", (request, response) => {
  const { guid } = request.params;
  const userIndex = usersDatabase.findIndex(user => user.guid === guid
  );
  if (userIndex === -1) {
    return response.status(404).send();
  } else {
  usersDatabase.splice(userIndex, 1);
  }
});



expressApp.listen(port, host, () => {
  console.log(`Servidor funcionando en http://${host}:${port}`);
});