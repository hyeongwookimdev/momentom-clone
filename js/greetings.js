const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const hello = document.querySelector(".main__greeting__hello");

const header = document.querySelector(".header");
const sideBar = document.querySelector(".side-bar");
const mainTime = document.querySelector(".main__time");
const coursesTitle = document.querySelectorAll(".main__courses__title");
const courses = document.querySelectorAll(".main__courses");
const footer = document.querySelector(".footer");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  hello.classList.add(HIDDEN_CLASSNAME);
  loginInput.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  header.classList.remove(HIDDEN_CLASSNAME);
  sideBar.classList.remove(HIDDEN_CLASSNAME);
  mainTime.classList.remove(HIDDEN_CLASSNAME);
  coursesTitle[0].classList.remove(HIDDEN_CLASSNAME);
  coursesTitle[1].classList.remove(HIDDEN_CLASSNAME);
  courses[0].classList.remove(HIDDEN_CLASSNAME);
  courses[1].classList.remove(HIDDEN_CLASSNAME);
  footer.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  hello.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginInput.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
  header.classList.remove(HIDDEN_CLASSNAME);
  sideBar.classList.remove(HIDDEN_CLASSNAME);
  mainTime.classList.remove(HIDDEN_CLASSNAME);
  coursesTitle[0].classList.remove(HIDDEN_CLASSNAME);
  coursesTitle[1].classList.remove(HIDDEN_CLASSNAME);
  courses[0].classList.remove(HIDDEN_CLASSNAME);
  courses[1].classList.remove(HIDDEN_CLASSNAME);
  footer.classList.remove(HIDDEN_CLASSNAME);
}
