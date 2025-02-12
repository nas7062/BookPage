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
