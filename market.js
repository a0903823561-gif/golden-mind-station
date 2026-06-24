let score = 0;
let goal = 3;
let gameTimer;

function startGame() {
  score = 0;
  document.getElementById("result").innerText = "";
  document.getElementById("game-area").style.display = "block";
  spawnItem();
  gameTimer = setTimeout(endGame, 20000);
}

function spawnItem() {
  let items = [
    { name:"牛奶", price:25 },
    { name:"麵包", price:35 },
    { name:"蘋果", price:20 },
    { name:"雞蛋", price:30 },
    { name:"咖啡", price:50 }
  ];
  let item = items[Math.floor(Math.random()*items.length)];
  let div = document.createElement("div");
  div.className = "item";
  div.innerText = item.name + " $" + item.price;
  div.style.position = "absolute";
  div.style.left = Math.random()*80 + "%";
  div.style.top = Math.random()*80 + "%";
  div.onclick = () => {
    if (item.price <= 50) { // 放寬條件
      score++;
    }
    div.remove();
  };
  document.getElementById("game-board").appendChild(div);
  setTimeout(() => div.remove(), 3000);
  setTimeout(spawnItem, 1500);
}

function endGame() {
  clearTimeout(gameTimer);
  if (score >= goal) {
    document.getElementById("result").innerText = "🎉 恭喜過關！得分：" + score;
  } else {
    document.getElementById("result").innerText = "💡 很棒的嘗試！再來一次吧！（得分：" + score + "）";
  }
}
