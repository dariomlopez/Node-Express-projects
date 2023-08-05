const app = require("./app/app");

const port = process.env.DB_PORT || 3000;

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`)
});