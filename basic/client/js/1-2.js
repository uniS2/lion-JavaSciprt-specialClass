// Object.keys, values, entries https://ko.javascript.info/keys-values-entries

let salaries = {
  "이현주": 150,
  "전선용": 200,
  "강예나": 450
}

// 1. 진짜 객체에 접근을 해서 조회가 되버림
Object.prototype.선범 = 50000000

// 1. for..in 그냥 쓰면 모든 객체의 요소를 조회
for(let key in salaries){
  // call(a, b); a: 누가 빌려쓰는데? b: hasOwnProperty에 전달해줄 값이 뭔데?
  if(Object.prototype.hasOwnProperty.call(salaries, key)){
    // console.log(salaries[key]);
    // 객체 조회 []방식 : computed property
    // . 방식 -> 위처럼 변수로 받아와서 처리하는건 안됨
  }
}

console.log( Object.keys(salaries) );  // ['이현주', '전선용', '강예나']

console.log( Object.values(salaries) );  // [150, 200, 450]

console.log( Object.entries(salaries) );  // [ ['이현주',150], ['전선용',200], ['강예나',450] ]

const arr = [ ['이현주',150], ['전선용',200], ['강예나',450] ];
console.log( arr[0] );
console.log( arr[0][0] );


// destructuring assignment
// 배열 구조 분해 할당
// 객체 구조 분해 할당 - 또한 있음

// for(let keyValue of Object.entries(salaries)){
  for(let [key, value] of Object.entries(salaries)){
  // console.log(keyValue, keyValue[0], keyValue[1]);
  // arr[0][0] 중 첫번째 생략가능. 즉, keyValue[0]은 바로 배열안의 배열의 첫번째 요소 반환

  // let key = keyValue[0];
  // let value = keyValue[1];

  console.log(key);
  console.log(value);
}

// forEach 와 map도 동일하게 동작


// 월급의 총 합
function sum(object){

  // null 등의 처리 <- 'object'가 나오므로
  if(typeof object !== 'object'){
    throw new Error('sum 함수의 매개변수는 객체만 올 수 있습니다.')
  }

  let total = 0;
  for(let value of Object.values(object)){

    console.log(value);
    total += value;
  }

  return total;
}

let result = sum(salaries);

console.log(result);