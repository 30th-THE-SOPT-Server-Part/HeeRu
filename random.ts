// 과제 조건
// 1. Member, Dinner interface 만들고 타입 지정하기
// 2. organize 내부 로직 채우기

import { Dinner } from "./interface/dinner";

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

    const ob = array.filter((array) => array.group === "ob");
    const yb = array.filter((array) => array.group === "yb");

    let dinnerMember: String[] = [ob[0].name, yb[0].name];

    console.log(
      `오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`
    );
  },
};

dinner.organize(dinner.member);
