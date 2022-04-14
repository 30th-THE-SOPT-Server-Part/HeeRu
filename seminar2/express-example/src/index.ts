import express, { Request, Response, NextFunction } from "express";

const app = express(); // express 객체 받아옴

app.use(express.json()); // express에서 request body를 json으로 받아오겠다.

app.use("/api", require("./api")); // use -> 모든 요청
// localhost:8000/api -> 로 들어오는 요청은 api 폴더로 간다. -> api/index.ts
// localhost:8000/api/user -> api폴더의 user.ts로 간다. -> api/user.ts

// 최상단 루트 엔드포인트로 요청이 들어왔을 때 사용하는 부분
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hi! 노드몬이 코드 변경을 진짜 감지해?");
}); // next는 미들웨어 관련 부분

// 8000번 포트에서 서버를 실행하겠다!
app.listen("8000", () => {
  console.log(`
    ##########################################
        🛡️Server Listening on port: 8000🛡️ 
    ##########################################
    `);
});
