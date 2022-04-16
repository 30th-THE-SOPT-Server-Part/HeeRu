import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const postId = req.params.postId;
  console.log(postId, "이거postid");
  return res.status(200).json({
    status: 200,
    message: "좋아요 성공",
    data: { postId: postId },
  });
});

module.exports = router;
