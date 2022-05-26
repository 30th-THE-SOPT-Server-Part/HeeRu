import express, { Request, Response } from "express";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import { ReviewCreateDto } from "../interfaces/review/ReviewCreateDto";
import { validationResult } from "express-validator";
import ReviewService from "../services/ReviewService";

/**
 * @route POST /review/movies/:movieId
 * @desc Create Review
 * @access Public
 */

const createReview = async (req: Request, res: Request) => {
  const error = validationResult(req);
  // error가 false면 error가 있다는 것
  if (!error.isEmpty()) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
  }

  const reviewCreateDto: ReviewCreateDto = req.body;
  const { movieId } = req.params;

  try {
    const data = await ReviewService.createReview(movieId, reviewCreateDto);

    res
      .status(statusCode.CREATED)
      .send(
        util.success(statusCode.CREATED, message.CREATE_REVIEW_SUCCESS, data)
      );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

/**
 * @route GET /review/movies/:movieId
 * @desc Get Review
 * @access Public
 */

const getReviews = async (req: Request, res: Response) => {
  const { movieId } = req.params;

  try {
    const data = await ReviewService.getReviews(movieId);

    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.READ_REVIEW_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

export default {
  createReview,
  getReviews,
};
