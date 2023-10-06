import puzzlesModel from "./puzzles-model.js";
import mongoose from "mongoose";

export const createPuzzle = (puzzle) => {
  return puzzlesModel.create(puzzle);
};

export const findPuzzleByID = async (puzzleId) => {
  try {
    // malformed puzzleIds will throw a BSON error and crash the server.
    return puzzlesModel.findOne({ _id: new mongoose.Types.ObjectId(puzzleId) });
  } catch {
    return {};
  }
};

export const findAllPuzzles = () => {
  return puzzlesModel.find();
};
