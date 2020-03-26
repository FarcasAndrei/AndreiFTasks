const express = require("express");
const app = express();
const taskRoutes = require("./routes/taskRoutes.js");

app.use(express.json());

app.get("/", (req, res) => res.send("It's working!"));

app.use("/products", taskRoutes);

app.listen(4000);