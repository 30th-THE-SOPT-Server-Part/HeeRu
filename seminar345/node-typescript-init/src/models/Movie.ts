import mongoose from "mongoose";
import { MovieInfo } from "../interfaces/movie/MovieInfo";

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  director: {
    type: String,
    require: true,
  },
  startDate: {
    type: Date,
  },
  thumbnail: {
    type: String,
  },
  story: {
    type: String,
  },
});

export default mongoose.model<MovieInfo & mongoose.Document>(
  "Movie",
  MovieSchema
);
