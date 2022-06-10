import mongoose from "mongoose";

// 리뷰어 이름을 저장 가능해야 하는데 유저라는 컬렉션을 만들었고 그 정보가 있을 거고 그 레퍼런스 참조를 할 것임
// 어떤 영화의 리뷰인지 알고 있어야 하니까 -> movie에 대한 ObjectId를 가지고 있어야 함

export interface ReviewInfo {
  writer: mongoose.Types.ObjectId;
  movie: mongoose.Types.ObjectId;
  title: string;
  content: string;
}
