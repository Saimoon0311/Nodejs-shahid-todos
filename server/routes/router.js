const express = require("express");
const Router = express.Router();
const Controller = require("../controller/controller");
Router.get("/", (req, res) => res.send("hello"));

Router.post("/api/todos/create", Controller.createtodos);
Router.get("/api/todos", Controller.alltodos);
// Router.delete("/api/todos/delete/:id", Controller.deletetodos);
Router.delete("/api/todos/delete/:id", Controller.deletetodos);

module.exports = Router;
