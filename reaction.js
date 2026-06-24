let score = 0;
let goal = 3;
let gameTimer;

function startGame() {
  score = 0;
  document.getElementById("result").innerText = "";
  document.getElementById("game-area").style.display = "block";
  spawnSignal();
  gameTimer = setTimeout(endGame, 20000);
}

function spawnSignal() {
  let signals = ["🔴","🟢","🔵","🟡"];
  let signal = document.createElement("span");
  signal.innerText = signals[Math.floor(Math.random()*signals.length)];
  signal.style.position = "absolute";
  signal.style.left = Math.random()*80 + "%";
  signal.style.top = Math.random()*80 + "%";
  signal.style.fontSize = "80px";
  signal.onclick = () => {
    score++;
    signal.remove();
  };
  document.getElementById("game-board").appendChild(signal);
  setTimeout(() => signal.remove(), 3000);
  setTimeout(spawnSignal, 1500);
}

function endGame() {
  clearTimeout(gameTimer);
  if (score >= goal) {
    document.getElementById("result").innerText = "🎉 恭喜過關！得分：" + score;
  } else {
    document.getElementById("result").innerText = "💡 很棒的嘗試！再來一次吧！（得分：" + score + "）";
  }
}
