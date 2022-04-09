let sokyte: string = '김소연보고싶다S2S2';
console.log(sokyte);

let isReal: Boolean = true;
console.log(isReal);

let sokyteAge: number = 2600;
console.log(sokyteAge);

const sum = (x: number, y: number): number => {
    return x * y;
}


// 배열 타입 표현 방법 2가지
const agesMethod1: number[] = [1, 2, 3, 4, 5];
const agesMethod2: Array<number> = [23, 23, 12];

const strArray: string[] = ["hi", "hello"]
const strArray2: Array<string> = ["hi", "hello"]


// Object vs object
// Object : 자스의 모든 생성자를 extend -> 자스의 모든 타입이 할당 가능
// object : 원시 타입을 제외한 나머지를 모두 받을 수 있음

// const obj1: object = {

// }

// const obj2: object = {
    
// }

//return 값 없으면 타입을 void
// 파라미터가 object : 원시타입을 제외한 나머지 
const f1 = (obj: object): void => {
    console.log(obj);
}

// 파라미터가 Object : 모든 타입을 다 받을 수 있음
const f2 = (obj: Object): void => {
    console.log(obj);
}

// 결론!!! 객체 타입만 받을 수 있어서 원시타입인 string은 출력 X (number도 안되겠지?)
f1([1, 2, 3, 4]);
//f1('hihi') // -> 출력 못함

// 모든 타입을 다 받을 수 있으니까 가능함
f2([1, 2, 3, 4]);
f2('hihi')


// return 값으로 number를 넣어줘야 오류가 안남. string을 넣어주면 오류가 남.
// array를 반환한다면 array로!
// 반환값이 없으면 void!로!
const div = (x: number, y: number): number => {
    return x / y;
}


// 얘네는 자기 자신만 들어가야 됨
// 해당 타입은 자기 자신 이외의 값 할당이 안된다.
let p: null = null;
let u: undefined = undefined;


// 타입 단언 Type assertions
// 1. as : 짱정아가 사용하는 방법! 나도 이거 써야징

let yourName: any = '채리지아';
let yourNameLength: number = (yourName as string).length; // 스위프트의 타입캐스팅임

console.log(yourName, yourNameLength);

// 2. angle-bracket

let serverName: any = '짱정아'; // any는 마법마냥 아무 타입이나 가능
let serverNameLength: number = (<string>serverName).length; // 형 변환 -> 스위프트에서 String()으로 감싸주는 식임.

console.log(serverName, serverNameLength);


// Any 를 완전 남발하면 그냥 js 쓰는 거랑 똑같음

// Interface - 여러가지 프로퍼티를 갖는 새로운 타입 정의 : 스위프트의 프로토콜!
// 변수, 함수, 클래스 모두 사용 가능함