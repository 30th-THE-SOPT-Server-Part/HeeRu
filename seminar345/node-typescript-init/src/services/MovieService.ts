import Movie from "../models/Movie";

const getMoviesBySearch = async (search: string): Promise<MovieInfo[]> => {
  const regex = (pattern: string) => new RegExp(`.*${pattern}.*`);

  try {
    const titleRegex: RegExp = regex(search);

    const movies = await Movie.find({ title: { $regex: titleRegex } });

    return movies;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getMoviesBySearch,
};
