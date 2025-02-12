const sliderContainer = document.querySelector("#slider-items");
const slidesCount = document.querySelectorAll(".slide").length;
let currentIdx = 1;
function movingSlider(index) {
  sliderContainer.style.transition = "transform 0.5s ease";
  sliderContainer.style.transform = `translateX(-${575 * index}px)`;
  console.log("moving");
}
document.addEventListener("click", (e) => {
  let index = currentIdx;
  e.preventDefault();
  if (e.target.classList.contains("lBtn")) {
    currentIdx = currentIdx - 1 >= 0 ? currentIdx - 1 : slidesCount - 1;
  } else if (e.target.classList.contains("rBtn")) {
    currentIdx = currentIdx + 1 >= slidesCount ? 0 : currentIdx + 1;
  }

  movingSlider(index);
});
const noticeList = ["함께 읽고 나누는 독서로 생활(투표이벤트)", "전체[개선안내] 독서로 서비스 요청사항 기능 개선 안내",
  "함께 읽고 나누는 독서로 생활(투표이벤트)",
  "교육디지털원패스 로그인 활용 안내"];

const notice = document.querySelector('#noticeList');

noticeList.forEach((item) => {
  let list = document.createElement("li");
  list.innerHTML = `${item}`;
  notice.appendChild(list);
  let line = document.createElement("hr");
  notice.appendChild(line);
})
const recoList = [["./5.jpg", "오늘은 그냥 쉬는날"],
  ["./6.jpg",
  "혼자서 본 영화"]];

const reco = document.querySelector('#recoBook');
recoList.forEach((item) => {
  let dv = document.createElement("div"); 
  let img = document.createElement("img"); 
  img.src = item[0]; 
  let p = document.createElement("p"); 
  p.innerHTML = item[1]; 
  dv.appendChild(img); 
  dv.appendChild(p); 
  reco.appendChild(dv); 
});

const categoryData = [
  {
    category: "국내 도서",
    books: [
      { title: "서울의 봄", author: "한강 | 창비" },
      { title: "소년이 온다", author: "김승호 | 창비" },
      { title: "모순", author: "민경남 | 데이원" },
      { title: "초역 부처의 말", author: "한강 | 창비" },
      { title: "어른의 행복은 조용하다", author: "김승호 | 창비" },
    ],
  },
  {
    category: "해외 도서",
    books: [
      { title: "노인과 바다", author: "어니스트 헤밍웨이 | 민음사" },
      { title: "데미안", author: "헤르만 헤세 | 열린책들" },
      { title: "호밀밭의 파수꾼", author: "J.D. 샐린저 | 문학동네" },
      { title: "사양", author: "다자이 오사무" },
      { title: "걸리버 여행기", author: "조너선 스위프트" },
    ],
  },
  {
    category: "자기계발서",
    books: [
      { title: "아주 작은 습관의 힘", author: "제임스 클리어 | 비즈니스북스" },
      { title: "역행자", author: "자청 | 웅진지식하우스" },
      { title: "부자의 그릇", author: "이즈미 마사토 | 다산북스" },
      { title: "나는 왜 남들보다 쉽게 지칠까", author: "최재훈 | 다산북스" },
      { title: "디바인 매트릭스", author: "그렉 브레이든 | 다산북스" },
    ],
  },
];

const cateWraps = document.querySelectorAll(".cate-wrap"); 

cateWraps.forEach((wrap) => {
  const categoryTitle = wrap.querySelector("h3").textContent; 
  const category = categoryData.find((c) => c.category === categoryTitle); 

  if (category) {
    category.books.forEach((book, index) => {
      const contentBox = document.createElement("div");
      contentBox.classList.add("content-box");

      const content = document.createElement("div");
      content.classList.add("content");

      const idx = document.createElement("span");
      idx.classList.add("idx");
      idx.textContent = index + 1;

      const bookTitle = document.createElement("span");
      bookTitle.textContent = book.title;

      content.appendChild(idx);
      content.appendChild(bookTitle);

      const author = document.createElement("span");
      author.classList.add("author");
      author.textContent = book.author;

      contentBox.appendChild(content);
      contentBox.appendChild(author);
      wrap.appendChild(contentBox); 
    });
  }
});
