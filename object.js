const sopt = {
    season: 30,
    group: ['YB', 'OB'],
    part: ['서버', '기획', '디쟌', '안드', '웹', '아요'],
    president: '규민온냐',
    introduce: function () {
        this.part.map(name => {
            console.log(`솝트 내 파트는 ${name} 파트가 있어요!`)
        });
    }
}

console.log(sopt.group);
sopt.introduce();
console.log(sopt.season);


let array = [1, 2, 3, 4, 5, "안녕"];
console.log(array);


let array2 = [
    {
        name: '최이준',
        age: 12
    },
    {
        name: '김태끼',
        age: 13
    }
];

console.log(array2);
console.log(typeof array2); // object -> array는 객체 파일이다.


// function 이다.! -> 일급객체! 
// 변수 또는 데이터 구조에 담을 수 있고, 다른 함수에 파라미터로 전달 가능, 반환값으로 사용할 수 있음

// 함수 선언식과 함수 표현식!(= 화살표 함수))


// 함수 선언식
function menu(dinner) {
    return `오늘 메뉴는 ${dinner}입니다.`;
}

const string = menu('삼겹살');
console.log(string);


// 함수 표현식을 쓰도록 하자! 앞으로!!

const menu2 = (dinner) => {
    return `오늘 메뉴는 ${dinner}입니다.`;
}

const string2 = menu2('혜수가 싫어하는 곱창');
console.log(string2);


// 함수 표현식 예시

const func = (num) => {
    return num * num;
}

const multiple = (func, num) => {
    console.log(func(num));
}

multiple(func, 3);


// 증감 연산을 왼쪽에 붙이냐, 오른쪽에 붙이냐에 따라 값이 달라짐.
// 이 부분 모르겠으니까 집가서 다시봐라..
let a = 2;
// let b = a++; // -> 이렇게 하면 b가 2가 나옴
let b = ++a; // -> 이렇게 하면 b가 3이 나옴

console.log(b);

// 사칙연산
let A = 2+3;
let x = 5;
let y = '5';
let B = 2*3;
let C = 3-2;
let D = 4/2;

console.log(A,B,C,D);


// 비교연산자
if (A === x) {
    console.log('A===5, 값과 타입도 같음');
}

if (A === y) {
    console.log('A===문자열5, 값과 타입도 같음');
}

if (A == x) {
    console.log('A==x, 값만 같음');
}

if (A != C) {
    console.log('값이 다름');
}

if (A !== y) {
    console.log('5와 문자열 5는 타입이 다름');
}

if (B%D == 0) {
    console.log('나머지가 0임')
} 


// and or

if (A==5 && D ===2) {
    console.log('hi')
}

if (A === 4 || D === 2 ) {
    console.log('하나만 맞아서 if문에 들어왔음')
}

// typeof도 비교연산으로 사용할 수 있고, 비교할 때는 string으로 
console.log(typeof (typeof A)); // 출력하면 string으로 나온다고 한다.

if (typeof A === 'number') { // 그렇기 때문에 여기서 string 형태로 해줘야 함.
    console.log(A);
}