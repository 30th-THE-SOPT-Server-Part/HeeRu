import express, { Request, Response, NextFunction } from "express";

const app = express();

app.use(express.json());
app.use("/api", require("./api"));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("최상단 루트 엔드포인트");
});

app.listen("8080", () => {
  console.log(`8080번 포트 돌아가냐?`);
});
