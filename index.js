const btns = document.querySelector(".btns");

const cards = document.querySelector(".cards");
const cardsNaruto = Array.from(document.querySelectorAll(".card--naruto"));
const cardsSasuke = Array.from(document.querySelectorAll(".card--sasuke"));
const cardsSakura = Array.from(document.querySelectorAll(".card--sakura"));

let countCard = 0;
let btnWithoutActiveClass;

function removeBlur() {
  Array.from(cards.children).forEach((card) => card.classList.remove("blur"));
}
function showTargetCard(event) {
  if (!event.target.classList.contains("btn")) return;

  const isNarutoBtn = event.target.classList.contains("naruto-btn");
  const isSasukeBtn = event.target.classList.contains("sasuke-btn");
  const isSakuraBtn = event.target.classList.contains("sakura-btn");

  if (isNarutoBtn) {
    event.target.classList.toggle("btn--active");
    cardsNaruto.forEach((card) => card.classList.toggle("clear"));
  }
  if (isSasukeBtn) {
    event.target.classList.toggle("btn--active");
    cardsSasuke.forEach((card) => card.classList.toggle("clear"));
  }
  if (isSakuraBtn) {
    event.target.classList.toggle("btn--active");
    cardsSakura.forEach((card) => card.classList.toggle("clear"));
  }
}
function addBlur(event) {
  if (!event.target.classList.contains("btn")) return;

  Array.from(cards.children).forEach((card) => card.classList.add("blur"));
}

function checkClass() {
  let isOnlyOneBtnHasActiveClass = false;

  const containActiveClass = (btn) => btn.classList.contains("btn--active");
  isOnlyOneBtnHasActiveClass = Array.from(btns.children).some(
    containActiveClass
  );

  if (!isOnlyOneBtnHasActiveClass) {
    removeBlur();
  }
}

function disabledIfTwoBtnsPressed() {
  let countBtnWithActiveClass = 0;
  Array.from(btns.children).forEach((btn) => {
    if (btn.classList.contains("btn--active")) {
      countBtnWithActiveClass += 1;
    }
  });

  if (countBtnWithActiveClass < 2) {
    Array.from(btns.children).forEach((btn) => {
      if (btn.disabled) {
        btn.disabled = false;
      }
    });
  } else {
    let isOnlyOneBtnHasActiveClass = false;

    Array.from(btns.children).forEach((btn) => {
      if (!btn.classList.contains("btn--active")) {
        btnWithoutActiveClass = btn;
      }
    });

    btnWithoutActiveClass.disabled = !btnWithoutActiveClass.disabled;
  }
}

btns.addEventListener("click", addBlur);
btns.addEventListener("click", showTargetCard);
btns.addEventListener("click", checkClass);
btns.addEventListener("click", disabledIfTwoBtnsPressed);
