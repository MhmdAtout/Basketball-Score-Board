let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");

const team1button1 = document.getElementById("11");
const team1button2 = document.getElementById("12");
const team1button3 = document.getElementById("13");

const team2button1 = document.getElementById("21");
const team2button2 = document.getElementById("22");
const team2button3 = document.getElementById("23");

const newGame = document.getElementById("new");

team1button1.addEventListener("click", () => {
  score1.innerText = ++score1.innerText;
});
team1button2.addEventListener("click", () => {
  score1.innerText = eval(score1.innerText) + 2;
});
team1button3.addEventListener("click", () => {
  score1.innerText = eval(score1.innerText) + 3;
});

team2button1.addEventListener("click", () => {
  score2.innerText = ++score2.innerText;
});
team2button2.addEventListener("click", () => {
  score2.innerText = eval(score2.innerText) + 2;
});
team2button3.addEventListener("click", () => {
  score2.innerText = eval(score2.innerText) + 3;
});

newGame.addEventListener("click", () => {
  score1.innerText = 0;
  score2.innerText = 0;
});
