function getAllIndexes(arr, val) {
  var indexes = [],
    i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }
  return indexes;
}

let Game = class Game {
  constructor(gamesize, snakeLen, mode) {
    this.snake = {};
    this.mice = {};
    this.snake.len = 0;
    this.snake.headX = 0;
    this.snake.headY = 0;
    this.snake.bodyX = [];
    this.snake.bodyY = [];
    this.mice.posX = -1;
    this.mice.posY = -1;
    this.gamesize = gamesize;
    this.snake.len = snakeLen;
    this.score = snakeLen;
    this.mode = mode;

    switch (this.mode) {
      case 'easy':
        this.gameSpeed = 150;
        break;
      case 'normal':
        this.gameSpeed = 80;
        break;
      case 'hard':
        this.gameSpeed = 60;
        break;
      case 'hardcore':
        this.gameSpeed = 25;
        break;
    }

    this.tableEl = document.querySelector('#game');
    this.gamesize = 50;
    this.movX = 0;
    this.movY = 0;
  }

  constructTable() {
    let table = [];
    for (let i = 0; i < this.gamesize; i++) {
      table[i] = [];
      for (let j = 0; j < this.gamesize; j++) {
        table[i][j] = 0;
      }
    }
    return table;
  }

  createTable() {
    this.table = this.constructTable();
    for (let i = 0; i < this.gamesize; i++) {
      this.tableEl.insertRow();
      for (let j = 0; j < this.gamesize; j++) {
        this.tableEl.rows[i].insertCell();
      }
    }
  }

  updateTable() {
    for (let i = 0; i < this.gamesize; i++) {
      for (let j = 0; j < this.gamesize; j++) {
        this.tableEl.rows[i].cells[j].innerHTML = ' ';
        if (
          this.table[i][j] !== 0 &&
          !this.tableEl.rows[i].cells[j].classList.contains('crt')
        ) {
          this.tableEl.rows[i].cells[j].classList.add('crt');
        }
        if (
          this.table[i][j] === 0 &&
          this.tableEl.rows[i].cells[j].classList.contains('crt')
        ) {
          this.tableEl.rows[i].cells[j].classList.remove('crt');
        }
      }
    }
  }

  placeMice() {
    this.mice.posX = Math.round(Math.random() * (this.gamesize - 1));
    this.mice.posY = Math.round(Math.random() * (this.gamesize - 1));

    this.table[this.mice.posX][this.mice.posY] = 100;
  }

  placeSnake() {
    let middle = Math.round(this.gamesize / 2);
    this.snake.headX = middle;
    this.snake.headY = middle;
  }

  isEating() {
    if (
      this.snake.headX == this.mice.posX &&
      this.snake.headY == this.mice.posY
    ) {
      this.snake.len += 5;
      this.placeMice();
      this.score = this.snake.len;
      document.querySelector('#score').innerText = this.score;
    }
  }

  gameOver() {
    if (this.snake.bodyX.length > 0) {
      this.table[this.snake.bodyX[0]][this.snake.bodyY[0]] = 0;
      this.snake.bodyX = this.snake.bodyX.slice(1);
      this.snake.bodyY = this.snake.bodyY.slice(1);
      this.updateTable();
    } else {
      this.tableEl.innerHTML =
        '<div class="gameOverContainer"><h1 class="gameOver">GAME OVER</h1></div>';
      clearInterval(this.gameOverInterval);
    }
  }

  moveSnake() {
    if (typeof this.table[this.snake.headX + this.movX] !== 'undefined') {
      if (
        typeof this.table[this.snake.headX + this.movX][
          this.snake.headY + this.movY
        ] != undefined &&
        (this.table[this.snake.headX + this.movX][
          this.snake.headY + this.movY
        ] === 0 ||
          this.table[this.snake.headX + this.movX][
            this.snake.headY + this.movY
          ] === 100) &&
        this.snake.headX + this.movX >= 0 &&
        this.snake.headX + this.movX < this.gamesize &&
        this.snake.headY + this.movY >= 0 &&
        this.snake.headY + this.movY < this.gamesize
      ) {
        this.snake.headX += this.movX;
        this.snake.bodyX.push(this.snake.headX);
        this.snake.headY += this.movY;
        this.snake.bodyY.push(this.snake.headY);
      } else if (this.movX !== 0 || this.movY !== 0) {
        clearInterval(this.gameInterval);
        this.timeStop = new Date();
        this.logScore();
        this.gameOverInterval = setInterval(() => {
          this.gameOver();
        }, this.gameSpeed);
      }

      this.isEating();
      if (
        this.snake.bodyX.length > this.snake.len &&
        this.snake.bodyY.length > this.snake.len
      ) {
        this.table[this.snake.bodyX[0]][this.snake.bodyY[0]] = 0;
        this.snake.bodyX = this.snake.bodyX.slice(1);
        this.snake.bodyY = this.snake.bodyY.slice(1);
      }
      this.table[this.snake.headX][this.snake.headY] = 50;
      this.updateTable();
    } else if (this.movX !== 0 || this.movY !== 0) {
      clearInterval(this.gameInterval);
      this.gameOverInterval = setInterval(() => {
        this.gameOver();
      }, 100);
    }
  }
  init() {
    this.createTable();
    this.placeSnake();
    this.placeMice();
    this.gameInterval = setInterval(() => {
      this.moveSnake(this.movX, this.movY);
    }, this.gameSpeed);
  }
  getStartTime() {
    if (typeof this.timeStart === 'undefined') {
      this.timeStart = new Date();
    }
  }

  logScore() {
    document.querySelector('#addScoreForm').style.display = 'block';
    document.querySelector('#hiddenInput1').value = this.score;
    let time =
      (this.timeStop.getTime() - snakeClass.timeStart.getTime()) / 1000;
    document.querySelector('#hiddenInput2').value = time;
    document.querySelector('#hiddenInput3').value = this.mode;
  }
};

function startGame(mode) {
  snakeClass = new Game(50, 5, mode);
  snakeClass.init();
  document.body.addEventListener('keydown', function (e) {
    snakeClass.getStartTime();

    switch (e.keyCode) {
      case 37:
        snakeClass.movX = 0;
        snakeClass.movY = -1;
        break;
      case 38:
        snakeClass.movY = 0;
        snakeClass.movX = -1;
        break;
      case 39:
        snakeClass.movX = 0;
        snakeClass.movY = 1;
        break;
      case 40:
        snakeClass.movY = 0;
        snakeClass.movX = 1;
        break;
      default:
        break;
    }
  });
}
let playerName = document.querySelector('#playerName');
let modeBtn = document.querySelector('#start');
let addScoreButton = document.querySelector('#addScore');

addScoreButton.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    playerName.value.length < 49 &&
    playerName.value.length > 2 &&
    document.querySelector('#hiddenInput1').value == snakeClass.score
  ) {
    addScoreButton.style.display = 'none';
    document
      .querySelector('#addScore')
      .parentElement.parentElement.parentElement.submit();
    addScoreButton.remove();
  }
});
modeBtn.addEventListener('click', function () {
  startGame(document.querySelector('input[name="gameMode"]:checked').value);
  document.querySelector('.selector').remove();
});

playerName.addEventListener('input', function () {
  if (
    playerName.value.length < 49 &&
    playerName.value.length > 2 &&
    document.querySelector('#hiddenInput1').value == snakeClass.score
  ) {
    playerName.nextElementSibling.style.display = 'none';
  } else {
    playerName.nextElementSibling.style.display = 'inline';
  }
});

window.addEventListener(
  'keydown',
  function (e) {
    if (
      ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(
        e.code
      ) > -1
    ) {
      e.preventDefault();
    }
  },
  false
);
