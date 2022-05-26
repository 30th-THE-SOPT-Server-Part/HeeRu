import express, { Request, Response } from "express";
import { UserCreateDto } from "../interfaces/user/UserCreaterDto";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import UserService from "../services/UserService";
import { UserUpdateDto } from "../interfaces/user/UserUpdateDto";

/**
 * @route POST /user
 * @desc Create user
 * @access Public
 */

const createUser = async (req: Request, res: Response) => {
  const userCreateDto: UserCreateDto = req.body; // UserCreateDto로 req.body 받아옴

  try {
    const data = await UserService.createUser(userCreateDto);

    res
      .status(statusCode.CREATED)
      .send(
        util.success(statusCode.CREATED, message.CREATE_USER_SUCCESS, data)
      );
  } catch (error) {
    console.log(error);
    // 서버 내부에서 오류 발생
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
 * @route PUT /user/:userId
 * @desc Update user
 * @access Public
 */

const updateUser = async (req: Request, res: Response) => {
  const userUpdateDto: UserUpdateDto = req.body;
  const { userId } = req.params;

  try {
    await UserService.updateUser(userId, userUpdateDto);

    res.status(statusCode.NO_CONTENT).send();
  } catch (error) {
    console.log(error);
    // 서버 내부에서 오류 발생
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
 * @route GET /user/:userId
 * @desc Read user
 * @access Public
 */

const findUserById = async (req: Request, res: Response) => {
  // 조회는 요청바디가 없음 -> get은 요청바디가 없어!!
  // 조회는 반환값이 있음
  const { userId } = req.params;

  try {
    const data = await UserService.findUserById(userId);

    if (!data) {
      return res
        .status(statusCode.NOT_FOUND)
        .send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    }

    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.CREATE_USER_SUCCESS, data));
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
 * @route DELETE /user/:userId
 * @desc Delete user
 * @access Public
 */

const deleteUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    await UserService.deleteUserById(userId);

    res.status(statusCode.NO_CONTENT).send();
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
  createUser,
  updateUser,
  findUserById,
  deleteUserById,
};
