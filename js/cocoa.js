const cocoa = document.querySelector("#cocoa");
const music = document.querySelector("#music");

function cocoaPopup() {
  window.open(
    "https://hyeongwookimdev.github.io/kokoa-clone-2022/",
    "popup=yes",
    "width=450, height=800"
  );
}

function musicPopup() {
  window.open(
    "https://music.youtube.com/",
    "popup=yes",
    "width=450, height=800"
  );
}

cocoa.addEventListener("click", cocoaPopup);
music.addEventListener("click", musicPopup);
