//typeof는 js에서 타입을 알기 위해서 사용됨
const name = '장서현';
console.log(typeof name);

let age = 18;
console.log(typeof age);

let happy = false;
console.log(typeof happy);


// 안녕하세요. 장서현입니다. 제 나이는 18살입니다. 
// iOS에서 \(name) 을 쓰는 것을 js에서는 backtick(`)을 쓴다고 한다. `${ }` 
console.log(`안녕하세요. ${name}입니다. 제 나이는 ${age}살입니다.`)


// console.log(typeof null);
// console.log(typeof undefined);

// null과 undefined는 다름


// js는 type이 없어서 배열 안에 다양하게 넣을 수 있다.
let array = [1, 2, 3, 4, 5, "안녕", false];


// array.map() 에 대해 알아보자!

let num = [1, 2, 3, 4];

// 한 줄 일 때는 중괄호 안 써도 되긴 함  -> like 고차함수
const newNumArr = num.map(x => x * 2);

console.log(newNumArr);

newNumArr.map(x => {
    console.log(x);
});

for (const x of newNumArr) {
    console.log(x);
}