import mongoose from "mongoose";
import puzzlesSchema from "./puzzles-schema.js";

const puzzlesModel = mongoose.model(
    'PuzzlesModel', puzzlesSchema
)

export default puzzlesModel;