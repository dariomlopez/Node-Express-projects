//Following this video -->  
//https://www.youtube.com/watch?v=NmkY4JgS21A

import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

export default app;