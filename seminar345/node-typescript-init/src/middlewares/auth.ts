import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";

export default (req: Request, res: Response, next: NextFunction) => {
  // request-header에서 토큰 받아오기
  // Bearer token 파싱해서 토큰만 가져오기
  const token = req.headers["authorization"]?.split(" ").reverse()[0];

  // 토큰 유무 검증
  // 토큰이 없는 경우 401 에러 반환 - 접근 금지
  if (!token) {
    return res
      .status(statusCode.UNAUTHORIZED)
      .send(util.fail(statusCode.UNAUTHORIZED, message.NULL_VALUE_TOKEN));
  }

  try {
    // jwt token 해독 - jwt 라이브러리에서 제공을 해줌
    const decoded = jwt.verify(token, config.jwtSecret);

    // payload 꺼내오기 -> decoded 타입 단언 필요
    req.body.user = (decoded as any).user;

    // next -> middleware 끝나면 다음으로 넘기기
    next();
  } catch (error) {
    console.log(error);

    // 특정 에러 예외 처리
    if (error.name == "TokenExpiredError") {
      return res
        .status(statusCode.UNAUTHORIZED)
        .send(util.fail(statusCode.UNAUTHORIZED, message.INVALID_TOKEN));
    }

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
