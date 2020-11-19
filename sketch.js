'use.strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];
let playerImg;
let coinImg;

function preload(){
	playerImg = loadImage('assets/grabber.png');
	coinImg = loadImage('assets/coin.png');
	//powers of twos 32x32 will read faster
}


//test of checking of github



function setup(){
	cnv = createCanvas(w, h);

	textFont("monospace");

	player = new Player();

	coins.push(new coin());
}

function draw(){

	switch (state){
		case 'title':
			title();
			cnv.mouseClicked(titleMouseClicked);
			break;
		case 'level 1':
			level1();
			cnv.mouseClicked(level1mouseclicked);
			break;
		case 'You win':
			youWin();
			cnv.mouseClicked(youWinMouseClicked);
			break;
		default:
			break;
	}
}

function keyPressed(){
	if (keyCode == LEFT_ARROW){
		player.direction = 'left'
	} else if (keyCode == RIGHT_ARROW){
		player.direction = 'right'
	} else if (keyCode == UP_ARROW){
		player.direction = 'up'
	} else if (keyCode == DOWN_ARROW){
		player.direction = 'down'
	} else if (key == ' '){
		player.direction = 'still';
	}
}

function title(){
	background(100);
	textSize(80);
	fill(255);
	textAlign(CENTER);
	text('title', w/2, h/5);

	textSize(30);
	text('click anywhere to start', w/2, h/2);
}

function titleMouseClicked(){
	console.log('canvas is clicked');
	state = 'level 1'
}

function level1(){
	background(0);
	//text('get points', w/2, h -30); //puts in the bottom left corner
	if (random(1) <= 0.01){
		coins.push(new coin());
	}

	player.display();
	player.move();


	for (let i = 0; i < coins.length; i++){
		coins[i].display();
		coins[i].move();
	}



	//check for collision, increase points by 1
	for (let i = coins.length - 1; i >= 0; i--){
	if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2){
		points++;
		console.log(points);
		coins.splice(i, 1);
	 } else if (coins[i].y > h){
	 	coins.splice(i, 1);
	 	console.log('coin is out of town');
	 }
	}
	text('points: ' + points, w / 4, h - 30);
}

function level1mouseclicked(){
	points = points + 1; // same as points += 1;
	console.log('points =' + points);

	if (points >= 10){
		state = 'you win';
	}
}

function youWin(){
	background(255, 50, 80);
	textSize(80);
	stroke(255);
	text('YOU Win', w/2, h/2);

	textSize(30);
	text('clcik anywhere to start', w/2, h * 3/4);
}

function youWinMouseClicked(){
	state = 'level 1';
	points = 0;
}
