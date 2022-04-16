import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/:postId/like/:likeCount", (req: Request, res: Response) => {
  const postId = req.params.postId;
  const likeCount = req.params.likeCount;
  return res.status(200).json({
    status: 200,
    message: "좋아요 성공",
    data: { postId: postId, likeCount: likeCount },
  });
});

module.exports = router;
