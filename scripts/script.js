function getAllIndexes(arr, val) {
  var indexes = [],
    i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }
  return indexes;
}

let Game = class Game {
  snake = {
    len: 0,
    headX: 0,
    headY: 0,
    bodyX: [],
    bodyY: [],
  };

  mice = {
    posX: -1,
    posY: -1,
  };

  constructor(gamesize, snakeLen, gameSpeed) {
    this.gamesize = gamesize;
    this.snake.len = snakeLen;
    this.score = snakeLen;
    this.gameSpeed = gameSpeed;
  }
  tableEl = document.querySelector('#game');
  gamesize = 50;
  movX = 0;
  movY = 0;
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
        if (this.table[i][j] !== 0) {
          this.tableEl.rows[i].cells[j].classList.add('crt');
        } else {
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
      console.log('chomp');
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
        console.log('gameOver');
        this.gameOverInterval = setInterval(() => {
          // console.log(this.movX, this.movY);
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
      console.log('gameOver');
      this.gameOverInterval = setInterval(() => {
        this.gameOver();
      }, 100);
    }
    this.tableEl.style.height = this.tableEl.offsetWidth + 'px';
  }
  init() {
    this.createTable();
    this.placeSnake();
    this.placeMice();
    this.gameInterval = setInterval(() => {
      this.moveSnake(this.movX, this.movY);
    }, this.gameSpeed);
  }
};
snakeClass = new Game(100, 5, 50);
snakeClass.init();
document.body.addEventListener('keydown', function (e) {
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
