const player1 = {
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
  score: 0,
};

const player2 = {
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
  score: 0,
};

const resetButton = document.querySelector("#reset");
const winningScore = document.querySelector("#playto");

function updateScore(player, opponent) {
  player.score++;
  player.display.innerText = player.score;
  let targetScore = parseInt(winningScore.value);
  if (player.score >= targetScore && player.score - opponent.score >= 2) {
    player.display.style.color = "blue";
    opponent.display.style.color = "red";
    player.button.disabled = true;
    opponent.button.disabled = true;
  }
}

player1.button.addEventListener("click", function (e) {
  e.preventDefault();
  updateScore(player1, player2);
});

player2.button.addEventListener("click", function (e) {
  e.preventDefault();
  updateScore(player2, player1);
});

resetButton.addEventListener("click", function (e) {
  e.preventDefault();
  reset();
});

winningScore.addEventListener("change", function () {
  reset();
});

function reset() {
  for (let player of [player1, player2]) {
    player.score = 0;
    player.display.innerText = 0;
    player.display.style.color = "black";
    player.button.disabled = false;
  }
}
