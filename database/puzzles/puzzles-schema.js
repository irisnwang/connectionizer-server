import mongoose from "mongoose";

const puzzlesSchema = mongoose.Schema(
  {
    author: String,
    title: String,
    guesses: Number,
    categories: [{ category: String, difficulty: Number, words: [String] }],
  },
  { collection: "puzzles" }
);

export default puzzlesSchema;
