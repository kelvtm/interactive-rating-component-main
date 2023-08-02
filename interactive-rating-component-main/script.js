const submitBtn = document.querySelector(".submit");
const feedbackPage = document.querySelector(".feedback-page");
const appreciationPage = document.querySelector(".appreciation-page");
const result = document.querySelector(".result");
const btn1 = document.querySelector(".one");
const btn2 = document.querySelector(".two");
const btn3 = document.querySelector(".three");
const btn4 = document.querySelector(".four");
const btn5 = document.querySelector(".five");

let btnRating = 0;
btn1.addEventListener("click", () => {
  btnRating = 1;
});
btn2.addEventListener("click", () => {
  btnRating = 2;
});
btn3.addEventListener("click", () => {
  btnRating = 3;
});
btn4.addEventListener("click", () => {
  btnRating = 4;
});
btn5.addEventListener("click", () => {
  btnRating = 5;
});
submitBtn.addEventListener("click", () => {
  feedbackPage.classList.add("hide");
  result.textContent = `You selected ${btnRating} out of 5`;
  appreciationPage.classList.remove("hide");
  console.log("you have submited");
});
