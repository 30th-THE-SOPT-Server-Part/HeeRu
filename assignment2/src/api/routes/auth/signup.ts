import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "로그인 성공, 나도 post하고 싶다.",
  });
});

module.exports = router;
