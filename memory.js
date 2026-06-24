let score = 0;
let goal = 3; // 降低過關門檻
let gameTimer;

function startGame() {
  score = 0;
  document.getElementById("result").innerText = "";
  document.getElementById("game-area").style.display = "block";
  spawnFlower();
  gameTimer = setTimeout(endGame, 20000); // 延長遊戲時間到 20 秒
}

function spawnFlower() {
  let flowers = ["🌸","🌼","🌻","🌹"];
  let flower = document.createElement("span");
  flower.innerText = flowers[Math.floor(Math.random()*flowers.length)];
  flower.style.position = "absolute";
  flower.style.left = Math.random()*80 + "%";
  flower.style.top = Math.random()*80 + "%";
  flower.style.fontSize = "80px";
  flower.onclick = () => {
    score++;
    flower.remove();
  };
  document.getElementById("game-board").appendChild(flower);
  setTimeout(() => flower.remove(), 3000);
  setTimeout(spawnFlower, 1500); // 增加出現頻率
}

function endGame() {
  clearTimeout(gameTimer);
  if (score >= goal) {
    document.getElementById("result").innerText = "🎉 恭喜過關！得分：" + score;
    setTimeout(() => {
      location.href = "menu.html"; // 自動跳回選單
    }, 3000);
  } else {
    document.getElementById("result").innerText = "💡 很棒的嘗試！再來一次吧！（得分：" + score + "）";
  }
}

