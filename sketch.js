let phrase = ["So what do you see here"
,"Very Good, Now this one"
,"How about this one, "
,"And here?"
,"Do you see something in this one?"
,"Now can you tell me what this one is?"
,"And this?"
,"You can take your time with this one"
,"Ok, and here"
,"Now tell me, what does this look like"
,"Take a good look at this one, and tell me what you see"
,"Does this one look like something"
,"Remember that these are only just ink blots"
,"What does this one look like"
,"There are no right or wrong answers here"
,"And how about this one"
,"Is there anything here that looks familiar?"
,"This one. I'm not entirely sure what this even is."
,"As a computer, I have access to all of the worlds information. Yet, I don't know what I am looking at."
,"Ok, Let me make sure that I heard you right, did you just say the warm welcoming hand of Satan?"];

let imageCounter;
let randomIndex;
let animating = false;
let button;
let ink = [];
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
  msg.volume = 1; // From 0 to 1
  msg.rate = .5; // From 0.1 to 10
  msg.pitch = 0; // From 0 to 2
  msg.text = "hello there";
  speechSynthesis.speak(msg); this plays the message

function preload(){

	for (let i = 1; i <= 20; i++){
		ink[i] = loadImage("assets/img_" + i + ".png")
	}
	
}

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(26);
  imageMode(CENTER);
  //msg.text = "I'm going to show you a series of ink bots. And I'd like you to tell me what you think. This will only take a minute of your time.";
  //speechSynthesis.speak(msg);

	button = createButton("View Blots");
	button.mousePressed(buttonPressed);
	button.class("Button");
	//after 1 sec, it will call the function the change the backgound color
	//set Timeout(changeBackground, 1000);
	//1000 = 1 second 
	//console.log(ink);
}

function draw() {

	if(animating == true){
		//square(random(width), random(height), random(50, 200))
		clear();
		image(ink[imageCounter], width/2, height/2);

		if (imageCounter < ink.length){
			imageCounter++;
		}else{
			imageCounter = 0;
		}
	}
}

function randomizer(){
	animating = false;

	if (phrase[0]){

		background(random(200, 255));
		randomIndex = int(random(phrase.length));
		text(phrase[randomIndex], width/2, 50);
		image(random(ink), width/2, height/2)
		phrase.splice(randomIndex,1);
  		msg.text = phrase[randomIndex];
  		speechSynthesis.speak(msg); 
		//speechSynthesis.speak(phrase[randomIndex]); 
	} else {
		background(random(200,255));
		text("There are no more blots to view", width/2, 50);
	}
}


function buttonPressed(){

	animating = true;
	setTimeout(randomizer, 2000);
}