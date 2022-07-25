const quotes = [
  {
    quote:
      "삶은 항상 과정이다. 변화와 발전의 과정이며, 기존 구조와 태어난 환경이 주고받는 끝없는 상호작용 과정이기도 하다.",
    author: "Erich Fromm",
  },
  {
    quote:
      "적은 물을 필요로 하는 식물이라면 그 식물에 대한 사랑은 필요한 만큼의 물을 주는 것으로 표현된다.",
    author: "Erich Fromm",
  },
  {
    quote: "삶은 목적을 위한 수단이 아니라 그 자체가 목적이다.",
    author: "Erich Fromm",
  },
  {
    quote: "사랑은 행동, 소유, 사용이 아니라 존재에 만족하는 능력이다.",
    author: "Erich Fromm",
  },
  {
    quote:
      "화가처럼 생명을 부여하는 관계 맺음을 통해 유리잔 같은 사물조차 생명을 얻을 수 있다.",
    author: "Erich Fromm",
  },
  {
    quote: "창의성은 보고 대답하는 능력이다.",
    author: "Erich Fromm",
  },
  {
    quote:
      "진정으로 집중할 땐 지금 이 순간에 하는 일이야말로 세상에서 가장 중요하다.",
    author: "Erich Fromm",
  },
  {
    quote: "고통은 인생의 최악이 아니다. 최악은 무관심이다.",
    author: "Erich Fromm",
  },
  {
    quote:
      "내 사랑이 적절하고 상대의 욕망과 본성에 맞을 때만 나는 사랑할 수 있다.",
    author: "Erich Fromm",
  },
  {
    quote: "창의적 자세의 전제조건은 감탄하는 능력이다.",
    author: "Erich Fromm",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
