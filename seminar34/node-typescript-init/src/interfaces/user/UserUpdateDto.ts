import { SchoolInfo } from "../school/SchoolInfo";

export interface UserUpdateDto {
  // udpate가 들어올 수 있기도 하고 아닐 수도 있음 -> optional

  name?: string;
  phone?: string;
  email?: string;
  age?: string;
  school?: SchoolInfo;
}
