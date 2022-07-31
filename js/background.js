const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const body = document.querySelector("body");

const bgImage = document.createElement("img");
bgImage.classList.add("bg-image");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

const backChangeBtn = document.querySelector(".footer__changeBtn");

function changeBack(event) {
  event.preventDefault();
  const changedBack = images[Math.floor(Math.random() * images.length)];
  bgImage.src = `img/${changedBack}`;
}

backChangeBtn.addEventListener("click", changeBack);
