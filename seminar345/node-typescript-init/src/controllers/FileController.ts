/**
 * @route GET /movie?search=
 * @desc GET Movie 검색
 * @access Public
 */

const getMoviesBySearch = async (req: Request, res: Response) => {
  const { search } = req.query;

  try {
  } catch (error) {
    console.log(error);
  }
};
