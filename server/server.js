import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import dbConnect from "./db/db.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

dbConnect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
