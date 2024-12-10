const canvas = document.getElementById('gamesCanvas');

const ctx = canvas.getContext('2d');

const box = 20;

let snake = [{x: box * 5, y: box * 5 }];

let direction = 'RIGHT';


let food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box,
};

 let pontos = 0;

 let texto = document.getElementById("pontos");

 let dificuldade = 200;


 document.addEventListener('keydown', changeDirection);


 function changeDirection(event){

if (event.keyCode === 37 && direction !== 'RIGHT') {direction = 'LEFT'};


if (event.keyCode === 38 && direction !== 'DOWN') {direction = 'UP'};


if (event.keyCode === 39 && direction !== 'LEFT') {direction = 'RIGHT'};



if (event.keyCode === 40 && direction !== 'UP') {direction = 'DOWN'};
    }

function draw() {

ctx.fillStyle = '#00afdb';

ctx.fillRect(0,0, canvas.clientWidth, canvas.height);


for(let i = 0; i < snake.length; i++){
    if ( i === 0 ) {
        ctx.fillStyle = 'red';
    } else {
        ctx.fillStyle = 'lightred';
    }
}


ctx.fillRect(snake[i].x, snake [i].y, box,box);

ctx.strokeStyle = 'darkred';

ctx.strokeRect(snake[i].x, snake[i].y,box,box);

ctx.fillStyle = 'green'; 

ctx.fillRect(food.x, food.y, box, box);

ctx.strokeStyle = 'white';

ctx.strokeRect(food.x, food.y, box, box);

let snakeX = snake[0].x;
let snakeY = snake[0].x;

if (direction === 'LEFT') {
    snakeX -= box;
}

else if (direction === 'UP') {
    snakeY -= box;
}

else if (direction === 'RIGHT') {
    snakeX -= box;
}

else if (direction === 'DOWNN') {
    snakeY -= box;
}



if (snakeX === food.x && snakeY === food.y) {

    pontos++;
  
    texto.textContent = "Potuação: "  

    dificuldade -= 10;

    clearInterval(draw, dificuldade);

    food = {
        x: Math.floor(Math.random() * 20) * box,
        y: Math.floor(Math.random() * 20) * box

    };


} else {
    snake.pop();
}


const newHead = {x: snakeX,  y: snakeY};







}















}

