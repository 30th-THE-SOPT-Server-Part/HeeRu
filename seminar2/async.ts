// 1. callback 함수
// console.log("안녕하세요");
// setTimeout((): void => {
//   console.log("set time out");
// }, 2000); // 2초

// console.log("끝");

// 함수 실행 순서 : 안녕하세요 -> 끝 -> 2초 후에 set time out
// 단점 : 콜백지옥 (중첩)

// 2. promise (callback보다 권장)

// const condition: boolean = false;

// const promise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("성공");
//   } else {
//     reject(new Error("reject !! 에러다!!"));
//   }
// });

// // -> fulfilled : 실행이 정상적으로 이행된 상태
// // then : promise의 resolve 값을 반환하는 것
// // -> rejected : 실행이 실패된 상태
// // catch : promise의 reject 값을 반환하는 것
// promise
//   .then((resolveData): void => {
//     console.log(resolveData);
//   })
//   .catch((error) => console.log(error));

// 함수도 인자로 받을 수 있다고 했다!
// const restaurant = (callback: () => void, time: number) => {
//   setTimeout(callback, time);
// };

// // 콜백함수가 인자로 들어가는데 그 인자의 time이 1000으로 들어감
// // Promise의 string값을 반환한 것임

// // 1. 주문
// const order = (): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     restaurant(() => {
//       console.log("[레스토랑 진행 상황 - 음식 주문]");
//       resolve("음식 주문 시작");
//     }, 1000);
//   });
// };

// // 2. 요리

// const cook = (progress: string): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     restaurant(() => {
//       console.log("[레스토랑 진행 상황 - 음식 조리]");
//       resolve(`${progress} -> 음식 조리 중`);
//     }, 2000);
//   });
// };

// // 3. 서빙

// const serving = (progress: string): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     restaurant(() => {
//       console.log("[레스토랑 진행 상황 - 음식 서빙 중]");
//       resolve(`${progress} -> 음식 서빙 중`);
//     }, 2500);
//   });
// };

// // 4. 먹기

// const eat = (progress: string): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     restaurant(() => {
//       console.log("[레스토랑 진행 상황 - 음식 먹는 중]");
//       resolve(`${progress} -> 음식 먹는 중`);
//     }, 3000);
//   });
// };

// // 이렇게 연결해서 작성하는 것이 promise chaining
// order()
//   .then((progress) => cook(progress))
//   .then((progress) => serving(progress))
//   .then((progress) => eat(progress))
//   .then((progress) => console.log(progress));

// 근데 위에서 then에서 에러가 발생했을 때 catch를 하나만 만들어두면 거기에 에러가 다 넘어옴

// Promise.resolve : 그냥 바로 resolve를 호출하고 싶을 때 쓰는 것

// 에러가 발생되었기 때문에 아래에 있는 값들이 출력X
// catch로 에러를 받아옴
// Promise.resolve(123)
//   .then((res) => {
//     throw new Error("에러발생!!");
//     return 456;
//   })
//   .then((res) => {
//     console.log(res); // 절대 실행되지 않음 왜냐면 이미 위에서 error가 발생되어서 catch가 나오니까
//     return Promise.resolve(789);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// async & await 제일 중요해~~~~~~~
// 함수표현식 (promise 방식으로 함)
let asyncFunc1 = (msg: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`asyncFunc1 - ${msg}`);
    }, 1000);
  });
};

let asyncFunc2 = (msg: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`asyncFunc2 - ${msg}`);
    }, 1500);
  });
};

let promiseMain1 = (): void => {
  asyncFunc1("server part")
    .then((result: string) => {
      console.log(result);
      return asyncFunc2("김루희");
    })
    .then((result: string) => {
      console.log(result);
    });
};

promiseMain1();

// async, await 방식
// 미쳤나봐,, 완전 간단해;;;;
const asyncMain = async () => {
  let result = await asyncFunc1("server part");
  console.log(result);
  result = await asyncFunc2("김루희");
  console.log(result);
};

asyncMain();
