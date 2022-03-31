import mongoose from "mongoose";
const Schema = mongoose.Schema

let Playstation = new Schema({
  name: String,
  year: Number,
  generation: String,
  games: Number,
  popularGame: String,
  backwardCompatibility: Boolean,
  unitsSold: Number
})

export default mongoose.model("playstations", Playstation)