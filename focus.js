let score = 0;
let goal = 3;
let gameTimer;

function startGame() {
  score = 0;
  document.getElementById("result").innerText = "";
  document.getElementById("game-area").style.display = "block";
  spawnFruit();
  gameTimer = setTimeout(endGame, 20000);
}

function spawnFruit() {
  let fruits = ["🍎","🍌","🍇","🍓","🍊","🍍"];
  let fruit = document.createElement("span");
  fruit.innerText = fruits[Math.floor(Math.random()*fruits.length)];
  fruit.style.position = "absolute";
  fruit.style.left = Math.random()*80 + "%";
  fruit.style.top = Math.random()*80 + "%";
  fruit.style.fontSize = "80px";
  fruit.onclick = () => {
    score++;
    fruit.remove();
  };
  document.getElementById("game-board").appendChild(fruit);
  setTimeout(() => fruit.remove(), 3000);
  setTimeout(spawnFruit, 1500);
}

function endGame() {
  clearTimeout(gameTimer);
  if (score >= goal) {
    document.getElementById("result").innerText = "🎉 恭喜過關！得分：" + score;
  } else {
    document.getElementById("result").innerText = "💡 很棒的嘗試！再來一次吧！（得分：" + score + "）";
  }
}
