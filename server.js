import express from 'express';
import cors from 'cors';
import puzzlesController from "./controllers/puzzles-controller.js"
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://0.0.0.0:27017/connectionizer'

mongoose.connect(CONNECTION_STRING)
const app = express();

app.use(cors());
app.use(express.json());

puzzlesController(app);

app.listen(process.env.PORT || 4000);