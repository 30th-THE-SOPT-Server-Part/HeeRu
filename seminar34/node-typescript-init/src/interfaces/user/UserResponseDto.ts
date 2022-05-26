// UserCreateDto와 내용이 똑같아서 이걸 확장시킬 것임
import mongoose from "mongoose";
import { UserCreateDto } from "./UserCreaterDto";

// UserCreateDto가 가지고 있는 걸 상속하는 것
// UserResponseDto에 geneder를 추가하고 싶은 경우에는 따로 추가가능..
export interface UserResponseDto extends UserCreateDto {
  _id: mongoose.Schema.Types.ObjectId;
}
