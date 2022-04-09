const http = require("http");

http
  .createServer((req, res) => {
    // 여기에 이제 서버에서 보내줄 코드
    // 한글 인코딩?? 설정이 안되어 있나봄
    res.write("<h1> hello world </h1>");
    res.end("<p> hangeul why not? </p>");
  })
  .listen(8080, () => {
    console.log("8080번에서 서버 대기중!");
  });
