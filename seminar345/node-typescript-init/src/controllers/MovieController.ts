import statusCode from "../modules/statusCode";

const getMoviesBySearch = async (req: Request, res: Response) => {
  const { sesarch } = req.query;

  try {
  } catch (error) {
    console.log(error);
    res.status(statusCode)
  }
};
