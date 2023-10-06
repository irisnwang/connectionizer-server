// import { examples } from "./sample-puzzles.js";
// let puzzles = examples;
import * as puzzlesDao from "../database/puzzles/puzzles-dao.js"

const questionController = (app) => {
  app.get("/api/puzzles/:puzzleId", findPuzzleByID);
  app.post("/api/puzzles", createPuzzle);
  app.get("/api/puzzleIds", findAllPuzzleIds);
};

const createPuzzle = async (req, res) => {
  const requestedPuzzle = req.body;
  const newPuzzle = await puzzlesDao.createPuzzle(requestedPuzzle);
  res.json(newPuzzle);
};

const findPuzzleByID = async (req, res) => {
  const puzzle = await puzzlesDao.findPuzzleByID(req.params.puzzleId);
  console.log(puzzle)
  res.json(puzzle);
};

const findAllPuzzleIds = async (req, res) => {
  const puzzles = await puzzlesDao.findAllPuzzles();
  res.json(puzzles.map((p) => p._id));
};

export default questionController;
