const app = require("./app/app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`)
});