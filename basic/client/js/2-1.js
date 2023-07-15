// 'use strict'

// this 찾기

// console.log(  );

// this

function a(){
  console.log(this);
}


const b = function (){
  console.log(this);
}


const c = ()=>{
  console.log(this);
}

// 객체의 메서드를 정의할때는 consise mothod를 사용하는게 좋다.
// 객체의 메서드 안에서 함수를 정의할때는 arrow function이 좋다.

/* const user = {
  sayHi(){
    // console.log(this);
    // this.targat = this;

    let sum = ()=>{
      console.log(this);
    }

    sum()

  }
} */

/* const user = {
  grades:[10,50,100],
  totalFrades(){
    this.grades.forEach(function(){
      console.log(this);
    },this)
  }
} */
const user = {
  grades:[10,50,100],
  totalGrades(){
    let total = 0;
    this.grades.forEach((item)=>{
      // console.log( item );
      total += item
    })

    return total;
  },
  get gr(){
    return this.grades
  },
  set gr(value){
    this.grades.push(value)
    // return this.grades
  }
}


user.totalGrades()





// isEven(3)    true | false


function isEven(number){

  // if(number % 2 === 0){
  //   return true;
  // }else{
  //   return false;
  // }

  return number % 2 === 0 ? '짝수' : '홀수';
  
  // return number % 2 === 0;
}


 // true


 let arr = ['선범','은빈','효윤'];

 arr.reduce(()=>{
  
 })
  

 const bb = arr.map((item)=>{
  return `<button>${item}</button>`
 })



 bb.forEach((item)=>{ // 동적 랜더링 
  document.body.insertAdjacentHTML('beforeend',item)
 })




//  const total = arr.reduce((acc,item,index,array)=>{
//     return acc + `<butotn class="${item + (index + 1)}"> clickME </butotn>`
//  },'')

 // pow 함수 만들기

//  document.body.insertAdjacentHTML('beforeend',total)

 
 function pow(x,n){
  let total = 1; // 초깃값
  //  반복문 53

  for(let i = 0; i < n; i++){
    total *= x
  }

  return total;

 }

 pow(2,53); // 9007199254740992
 
 

 const powExpression = (x,n)=> Array(n).fill(null).reduce(acc=> acc * x ,1) 
 
 
 powExpression(2,53)
 
 
//  let total = 0;
//  total *= 2;



function repeat(text,count){
  
  let result = '';

  for(let i = 0; i < count; i++){
    result += (text + ' ')
  }

  return result.trim();

}


// 변수 담을 공간
// 반복문 
// 변수 += 문자
// return value


console.assert(repeat('hello😍',3) === 'hello😍 hello😍 hello😍')




const repeatExpression = (text,count) => Array(count).fill(null).reduce(acc => acc + (text + ' '),'').trim().toUpperCase()


repeatExpression('bye⭐️',3)

user.satotalFrades()