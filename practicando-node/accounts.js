import express from "express";
import{usersDatabase} from "./database.js";

const accountRouter = express.Router();

/** Detalles de la cuenta a partir de identificador guid */
accountRouter.get("/account/:guid", (request, response) => {
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
accountRouter.post("/account", (request, response) => {
  const {guid, name} = request.body;

  if(!name || !guid) {
    response.status(400).send();
  }

  const user = usersDatabase.find(user => user.guid === guid);
  if (user) {
    return response.status(409).send();
  } else {
    usersDatabase.push({
      guid,
      name,
    });
    return response.send();
  }

});

/** Actualizar una cuenta */
accountRouter.patch("/account/:guid", (request, response) => {
  const { guid } = request.params;
  const { name } = request.body;
  if(!name) {
    return response.status(400).send();
  }

  const user = usersDatabase.find(user => user.guid === guid
  );
  if (!user) {
    response.status(404).send();
  } else {
    user.name = name;
    return response.send(user);
  }
});

/** Eliminar cuenta */
accountRouter.delete("/account/:guid", (request, response) => {
  const { guid } = request.params;
  const userIndex = usersDatabase.findIndex(user => user.guid === guid
  );
  if (userIndex === -1) {
    return response.status(404).send();
  } else {
  usersDatabase.splice(userIndex, 1);
  }
});