import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Listagem de Usuario");

  response.json(["Juninho", "Fred", "Jonatan"]);
});

app.listen(3333);
