"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Anh iu béeeeee, dạ hôm nay do lỡ huii mong Bé hong dận qdatt nhaaaa,qdatt thương Thúy Vyyy lắm, dạ muốn mỗi sáng dậy dc nch rồi zuii vẻ...muốn dc nghe Bé nói chuyện:3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Không Bao Giờ",
    "Qdatt muốn nói chuyện với Bé mỗi sáng",
    "Mong bé tha lỗi hong dận ha sao ht nhoa :((",
    "Qdatt muốn nch mún gọi bé dậy cơ :((",
    "Bé honggg dận nhaaaa hôm nayyy lỡ 1 hôm hoiii ạ ",
    "Anhhh iu bé nhắm nhunnn đóoooo",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
