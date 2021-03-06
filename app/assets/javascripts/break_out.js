var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

/* 
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
*/

var score = 0;
var life = 3;

var x = canvas.width/2;
var y = canvas.height -30;
var dx = 2;
var dy = -2;
var ballRadius = 10;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth)/2;

var rightPressed = false;
var leftPressed = false;

var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];

for (var c = 0; c < brickColumnCount; c++){
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++){
        bricks[c][r] = {x:0, y:0, status: 1};
    }
}

function drawBricks(){
    for (var c = 0; c < brickColumnCount; c++){
        for(var r = 0; r < brickRowCount; r++){
            if(bricks[c][r].status == 1){
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#ff6666";
            ctx.fill();
            ctx.closePath();
        }
        }
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e){
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > paddleWidth/2 && relativeX < canvas.width - paddleWidth/2){
        paddleX = relativeX - paddleWidth/2;
    }
}


function drawBall(){
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#ff6666";
	ctx.fill();
	ctx.closePath();
}



function drawPaddle(){
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = "#ff6666";
	ctx.fill();
	ctx.closePath();
}

function collisionDetection(){
        for (var c = 0; c < brickColumnCount; c++){
        for(var r = 0; r < brickRowCount; r++){
            var b = bricks[c][r];
            if(b.status == 1) {
            if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight){
                dy = -dy;
                b.status = 0;
                score++;
                if(score == brickRowCount*brickColumnCount){
                    alert("YOU WIN");
                    document.location.reload();
                }
            }}
    }
}
}

function drawScore(){
    ctx.font = "16px Arial";
    ctx.fillStyle =  "#ff6666";
    ctx.fillText("Score: " + score, 8, 20);
}

function drawLife(){
    ctx.font = "16px Arial";
    ctx.fillStyle =  "#ff6666";
    ctx.fillText("Lives: " + life, canvas.width-65, 20);
}



function drawOver(){
    ctx.font = "50px Arial";
    ctx.fillStyle =  "#ff6666";
    ctx.fillText("Game Over", canvas.width-365, 180);
}

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	drawPaddle();
    drawBricks();
    collisionDetection();
    drawScore();
    drawLife();

	if (y + dy < ballRadius){
		dy = -dy;
	}
    else if(y + dy > canvas.height - ballRadius){
        if(x > paddleX && x < paddleX + paddleWidth){
            dy = -dy;
        }
        else{
            life --;
            if(life <= 0) {
               setInterval(drawOver(), 500);
               alert("Game Over");
               document.location.reload();
            }
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 2;
                dy = -2;
                paddleX = (canvas.width-paddleWidth)/2;
            }
        }
    }

	if (x + dx < ballRadius || x + dx > canvas.width - ballRadius){
		dx = -dx;
	}

	if(rightPressed && paddleX < canvas.width-paddleWidth) {
    	paddleX += 7;
	}
	else if(leftPressed && paddleX > 0) {
    	paddleX -= 7;
	}
	
	x += dx;
	y += dy;

    requestAnimationFrame(draw);
}

//setInterval(draw, 10);

draw();

