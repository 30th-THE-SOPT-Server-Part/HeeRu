import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { UserCreateDto } from "../interfaces/user/UserCreaterDto";
import { UserResponseDto } from "../interfaces/user/UserResponseDto";
import { UserUpdateDto } from "../interfaces/user/UserUpdateDto";
import User from "../models/User";

// Create

const createUser = async (
  userCreateDto: UserCreateDto
): Promise<PostBaseResponseDto> => {
  try {
    const user = new User({
      name: userCreateDto.name,
      phone: userCreateDto.phone,
      email: userCreateDto.email,
      age: userCreateDto.age,
      school: userCreateDto.school,
    });

    await user.save();

    const data = {
      _id: user.id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Update

const updateUser = async (userId: string, userUpdateDto: UserUpdateDto) => {
  try {
    // findByIdAndUpdate 를 몽구스에서 사용함

    await User.findByIdAndUpdate(userId, userUpdateDto);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// GET

const findUserById = async (
  userId: string
): Promise<UserResponseDto | null> => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// DELETE

const deleteUserById = async (userId: string) => {
  try {
    await User.findByIdAndDelete(userId);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  createUser,
  updateUser,
  findUserById,
  deleteUserById,
};
