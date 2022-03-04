const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
let index = 0;
let intervalId = null;

const nextIndex = () => (index = index < 2 ? ++index : 0);

const stopInterval = () => {
  clearInterval(intervalId);
};

const changeColor = () => {
  const colors = ["red", "green", "yellow"];
  const color = colors[index];
  turnOn[color]();
  nextIndex();
};

const turnOn = {
  red: () => (img.src = "img/red.jpg"),
  yellow: () => (img.src = "img/yellow.jpg"),
  green: () => (img.src = "img/green.jpg"),
  automatic: () => (intervalId = setInterval(changeColor, 1000)),
};

buttons.addEventListener("click", (e) => {
  stopInterval();
  turnOn[e.target.id]();
});
