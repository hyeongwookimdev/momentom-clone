const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const hello = document.querySelector(".main__greeting__hello");

const header = document.querySelector(".header");
const sideBar = document.querySelector(".side-bar");
const mainTime = document.querySelector(".main__time");
const todoForm = document.querySelector("#todo-form input");
const coursesTitle = document.querySelectorAll(".main__courses__title");
const courses = document.querySelectorAll(".main__courses");
const footer = document.querySelector(".footer");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const link = document.querySelector("a");

const greetingUser = document.querySelector(".typing");
const txtArr = ["Good Morning", "Good Afternoon", "Good Evening", "Good Night"];
const date = new Date();
const hours = date.getHours();
let index = 0;
if (hours >= 5 && hours <= 9) {
  index = 0;
} else if (hours >= 10 && hours <= 17) {
  index = 1;
} else if (hours >= 18 && hours <= 21) {
  index = 2;
} else {
  index = 3;
}

let currentTxt = txtArr[index].split("");

function writeTxt() {
  greetingUser.textContent += currentTxt.shift();
  if (currentTxt.length !== 0) {
    setTimeout(writeTxt, Math.floor(Math.random() * 110));
  }
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  hello.classList.add(HIDDEN_CLASSNAME);
  loginInput.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  writeTxt();
  header.classList.remove(HIDDEN_CLASSNAME);
  sideBar.classList.remove(HIDDEN_CLASSNAME);
  mainTime.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  coursesTitle[0].classList.remove(HIDDEN_CLASSNAME);
  coursesTitle[1].classList.remove(HIDDEN_CLASSNAME);
  courses[0].classList.remove(HIDDEN_CLASSNAME);
  courses[1].classList.remove(HIDDEN_CLASSNAME);
  footer.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  greeting.innerText = `! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greetingUser.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  hello.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginInput.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
  writeTxt();
  header.classList.remove(HIDDEN_CLASSNAME);
  sideBar.classList.remove(HIDDEN_CLASSNAME);
  mainTime.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  coursesTitle[0].classList.remove(HIDDEN_CLASSNAME);
  coursesTitle[1].classList.remove(HIDDEN_CLASSNAME);
  courses[0].classList.remove(HIDDEN_CLASSNAME);
  courses[1].classList.remove(HIDDEN_CLASSNAME);
  footer.classList.remove(HIDDEN_CLASSNAME);
}
