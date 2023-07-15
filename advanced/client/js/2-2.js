// TWO 버튼을 클릭하면 PAGE02 나올 수 있도록.
const nav = document.querySelector(".nav");
// const navList = nav.querySelectorAll(".nav li");
const [one, two, three] = nav.querySelectorAll(".nav li");
const contents = document.querySelector(".contents");
// const button2 = document.querySelectorAll('button')[1] 굳이 버튼을 찾아줄 필요가 없으므로

// 동적 렌더링
const createDIV = (data,className) => {
  if(!Array.isArray(date)){
    let template = `
      <div class="${className}">${item}</div>
    `
    return template;
  }

  return data.map(item=>/* html */`<div class="${className}">${item}</div>` )
}
createDIV(pages, 'section');

const render = (node,data)=>{
  node.insertAdjacentHTML('beforeend', data);
}

const div = createDIV(pages, 'section')

div.forEach((item)=>{
  render(contents,item)
})
// render(contents, createDIV(pages, 'section'))

// 1. 태그를 생성 create
// 2. 생성된 태그를 가지고 뿌려줘야함 render


/* const handleTab = (e) => {
  let target = e.currentTarget; // arrow function 에서 target을 찾아냄 (this 바인딩 X 대체)
  let tabIndex = target.dateset.tabInex;

  밑 동일
} */

function handleTab() {
  // console.log( this.dataset.tabIndex );  // DOMStringMap {tabIndex: '1'}
  let tabIndex = this.dateset.tabIndex;

  for (let i = 1; i <= 3; i++) {
    nav.classList.remove(`tab${i}`);
  }

  nav.classList.add(`tab${tabIndex}`);
  contents.style.transform = `translateX(-${33.33333 * (tabIndex - 1)}%)`;

  /* if(currentIndex == 1) {
      nav.classList.add('tab1');
      contents.style.transform = 'translateX(0%)'
  } else if (currentIndex == 2) {
      nav.classList.add('tab2');
      contents.style.transform = 'translateX(-33.333333%)';
  } else {
      nav.classList.add('tab3');
      contents.style.transform = 'translateX(-66.666666%)';
  } */

  // nav.classList.add('tab2');
  // contents.style.transform = 'translateX(-33.333333%)';
}

// 제거 및 생성을 하나하나 해야하므로 이슈
// navList[0].addEventListener("click", handleTab);
one.addEventListener("click", handleTab);
two.addEventListener("click", handleTab);
three.addEventListener("click", handleTab);


/* navList.forEach((item, index) => {
  // item.addEventListener('click', handleTab)
  item.addEventListener("click", () => {
    for (let i = 0; i < 3; i++) {
      nav.classList.remove(`tab${i}`);
    }

    nav.classList.add(`tab${tabIndex}`);
    contents.style.transform = `translateX(-${33.33333 * (tabIndex - 1)}%)`;
  });
}); */

/* nav.addEventListener('click', (e)=>{
  console.log(e.target.closet('li')); // e.taget 요소를 탐색
}) */
// event delegation 내가 아닌 부모에 한번에 걸음 (이벤트 위임). 각자 수집한 대상의 이벤트를 찾아다니는