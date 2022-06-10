import { Router } from "express";
import ReviewController from "../controllers/ReviewController";
import { body } from "express-validator/check";
import auth from "../middlewares/auth";

const router: Router = Router();

// express-validator가 먼저 request body를 검사하고 넘기게끔 구현을 하는 것
router.post(
  "/movies/:movieId",
  // 이 title, content, writer이라는 것은 비어서는 안된다!
  // 이렇게 title, content, writer가 비었는지 아닌지 검증을 하고나서 createReview로 넘어가게 된다.
  [
    body("title").notEmpty(),
    body("content").notEmpty(),
    body("writer").notEmpty(),
  ],
  ReviewController.createReview
);

router.get("/movies/:movieId", auth, ReviewController.getReviews);
export default router;
