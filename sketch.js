let phrase = ["So what do you see here"
,"Very Good, Now this one"
,"How about this one"
,"And here?"
,"Ok, and here"
,"There are no right or wrong answers here"
,"And how about this one"
,"Ok, Let me make sure that I heard you right, did you just say the warm welcoming hand of Satan?"];

let randomIndex;
let animating = false;
let button;
let ink;
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
  msg.volume = 1; // From 0 to 1
  msg.rate = .5; // From 0.1 to 10
  msg.pitch = 0; // From 0 to 2
  //msg.text = "hello there";
  //speechSynthesis.speak(msg); this plays the message

function preload(){

	let n = int(random(1, 20));
	ink = loadImage("assets/img " + n + ".png")
}

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(26);
  imageMode(CENTER);


	button = createButton("View Blots");
	button.mousePressed(buttonPressed);
	//after 1 sec, it will call the function the change the backgound color
	//set Timeout(changeBackground, 1000);
	//1000 = 1 second 

}


function draw() {

	if(animating == true){
		square(random(width), random(height), random(50, 200))
	}

}

function randomizer(){
	animating = false;

	if (phrase[0]){

		background(random(200, 255));
		randomIndex = int(random(phrase.length));
		text(phrase[randomIndex], 50, 50);
  		msg.text = phrase[randomIndex];
  		//speechSynthesis.speak(msg); 
		speechSynthesis.speak(phrase[randomIndex]); 
		image(ink, width/2, height/2)
		
		phrase.splice(randomIndex,1);
	} else {
		background(random(200,255));
		text("No more hats.", 50, 50);
	}
}


function buttonPressed(){

	animating = true;
	setTimeout(randomizer, 2000);
}