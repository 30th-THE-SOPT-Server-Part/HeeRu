// var name = "heerucan";
// var name = "sokyte";

// console.log(name); // sokyte 출력

// let name2 = "iOS";
// let name2 = "server";

// console.log(name2); // iOS 출력

// let name3 = "임원진짱";
// name3 = "임원진안짱";

// console.log(name3) // 임원진안짱 출력

// const name4 = "김루희짱";
// name4 = "김혜수";

// console.log(name4)


// 여기서부터는 scope 연습

// if (true) {
//     var x = 'var variable';

// }

// console.log(x);

// if (true) {
//     const y = 'const variable';
// }

// console.log(y); // 여기서 에러가 난다. 이유는 const는 블록 스코프니까.


// var 변수는 function 스코프인데 가능할까?


function foo() {
    if (true) {
        var name = '채정아';
        console.log('if-block', name);
    }
    console.log('function-block-', name); // 여기서 var이 호출된 거는 상관없음
}

console.log('global-', name); // 여기서 에러가 남 -> 함수 내부에서 선언이 되어 있기 때문에 


// 예전에는 var 변수를 많이 썼었음. 재선언, 재할당 + 호이스팅 문제가 많아서 let, const 쓰는 것 추천
