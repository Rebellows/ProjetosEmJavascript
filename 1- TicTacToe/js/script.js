let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

let currentPlayer = 'x'; 
let gameOver = false;

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function() {
    if (this.childNodes.length > 0 || gameOver) {
      return;
    }

    if (currentPlayer === 'x') {
      let cloneX = x.cloneNode(true);
      this.appendChild(cloneX);
      checkWinCondition();
      
      if (!gameOver) {
        if (secondPlayer === 'AI-player') {
          currentPlayer = 'o';
          setTimeout(computerPlay, 500);
        } else {
          currentPlayer = 'o'; 
        }
      }
    }
    else if (secondPlayer !== 'AI-player') {
      let cloneO = o.cloneNode(true);
      this.appendChild(cloneO);
      checkWinCondition();
      
      if (!gameOver) {
        currentPlayer = 'x'; 
      }
    }
  });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    secondPlayer = this.getAttribute("id");
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].style.display = 'none'; 
    }
    setTimeout(function() {
      let container = document.querySelector("#container");
      container.classList.remove("hide"); 
    }, 500); 
  });
}

function computerPlay() {
  if (gameOver) return; 

  let emptyBoxes = Array.from(boxes).filter(box => box.childNodes.length === 0);

  if (emptyBoxes.length === 0) return; 

  let randomBox = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
  let cloneO = o.cloneNode(true);
  randomBox.appendChild(cloneO);
  checkWinCondition();

  if (!gameOver) {
    currentPlayer = 'x'; 
  }
}

function checkWinCondition() {
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  function verifyLine(a, b, c) {
    if (a.children.length > 0 && b.children.length > 0 && c.children.length > 0) {
      let aChild = a.children[0].className;
      let bChild = b.children[0].className;
      let cChild = c.children[0].className;

      if (aChild === 'x' && bChild === 'x' && cChild === 'x') {
        declareWinner("x");
      }
      if (aChild === 'o' && bChild === 'o' && cChild === 'o') {
        declareWinner("o");
      }
    }
  }

  let winConditions = [
    [b1, b2, b3], [b4, b5, b6], [b7, b8, b9],
    [b1, b4, b7], [b2, b5, b8], [b3, b6, b9], 
    [b1, b5, b9], [b3, b5, b7]                
  ];

  for (let condition of winConditions) {
    verifyLine(condition[0], condition[1], condition[2]);
    if (gameOver) return; 
  }

  let filledBoxes = Array.from(boxes).filter(box => box.childNodes.length > 0);
  if (filledBoxes.length === 9 && !gameOver) {
    declareWinner("draw");
  }
}

function declareWinner(winner) {
  gameOver = true; 

  let scoreboardX = document.querySelector("#scoreboard-1");
  let scoreboardO = document.querySelector("#scoreboard-2");
  let msg = "";

  if (winner === 'x') {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    msg = "The player 1 wins!";
  }
  else if (winner === 'o') {
    scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
    msg = (secondPlayer === 'AI-player') ? "The AI wins!" : "The player 2 wins!";
  }
  else {
    msg = "It's a draw!";
  }

  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");

  setTimeout(function() {
    messageContainer.classList.add("hide");
    resetGame();
  }, 3000);
}

function resetGame() {
  player1 = 0;
  player2 = 0;
  currentPlayer = 'x';
  gameOver = false;

  let boxesToRemove = document.querySelectorAll(".box div");
  for (let i = 0; i < boxesToRemove.length; i++) {
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
  }
}
