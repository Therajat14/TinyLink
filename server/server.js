import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import dbConnect from "./db/db.js";
import routes from "./router/linkRoutes.js";

dotenv.config();
dbConnect();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.listen(process.env.PORT);
