import { SchoolInfo } from "../school/SchoolInfo";

export interface UserCreateDto {
  name: String;
  phone: String;
  email: String;
  age?: Number;
  school?: SchoolInfo;
}
