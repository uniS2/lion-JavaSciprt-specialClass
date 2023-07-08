// 조건문 구현: 로그인 구현하기 https://ko.javascript.info/logical-operators

// 소문자를 넣어도 넘어갈 수 있도록: 경우를 어떻게 나누어야 할까? ecs 누르면 왜 에러가..?
// prompt에서 null! null.toLowerCase()가 말이 되니? error!
/* 1.userName? password?  2.함수에 넣어주기 */
/* function login(userName) {
  
  Object.prototype.toString.call(userName).slice(8,-1)

  if(!userName) return; */

// ' ' 공백문자를 넣었을 때 취소되었습니다.

let userName = prompt("사용자의 아이디를 입력해주세요", "");

if (userName?.toLowerCase() === "admin") {
  let pw = prompt("비밀번호:", "");

  if (pw?.toLowerCase() === "themaster") {
    console.log("환영합니다!");
  } else if (pw === null || pw.replace(/\s*/g, '') === '') { // || userName === ''
    console.log("취소되었습니다.");
  } else {
    console.log("인증에 실패하였습니다.");
  }
  // 정규표현식

} else if (userName?.replace(/\s*/g, '') === '' || userName === null) {
  console.log("취소되었습니다.");
} else {
  console.log("인증되지 않은 사용자 입니다.");
}
