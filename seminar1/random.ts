// 과제 조건
// 1. Member, Dinner interface 만들고 타입 지정하기
// 2. organize 내부 로직 채우기

import { Dinner } from "./interface/dinner";
import { Members } from "./interface/member";

const dinner: Dinner = {
  member: [
    {
      name: "채리지아",
      group: "ob",
    },
    {
      name: "남준표",
      group: "ob",
    },
    {
      name: "공잔디",
      group: "yb",
    },
    {
      name: "윤지후릐",
      group: "ob",
    },
    {
      name: "박개천",
      group: "yb",
    },
  ],
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  },
  organize(array) {
    this.shuffle(array);

    const ob = array.find((array) => array.group === "ob");
    const yb = array.find((array) => array.group === "yb");

    // 타입가드
    if (ob && yb) {
      const dinnerMember: String[] = [ob.name, yb.name];
      console.log(
        `오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`
      );
    } else {
      console.log("undefined가 나왔겠지요");
    }
  },
};

dinner.organize(dinner.member);
