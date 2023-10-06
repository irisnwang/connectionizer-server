import mongoose from "mongoose";

const puzzlesSchema = mongoose.Schema(
  {
    guesses: Number,
    words: [{ word: String, category: String, difficulty: Number }],
  },
  { collection: "puzzles" }
);

export default puzzlesSchema;
