let phrase = ["So what do you see here"
,"Very Good, Now this one"
,"How about this one"
,"And here?"
,"Do you see something in this one?"
,"How about here"
,"And this?"
,"You can take your time with this one"
,"Ok, and here"
,"Now tell me what does this looks like"
,"Take a look at this one"
,"Does this one look like something"
,"Remember that these are only just ink blots"
,"What do this one look like"
,"There are no right or wrong answers here"
,"And how about this one"
,"Is there anything here that look fimiliar?"
,"This one. I'm not entirely sure what this even is."
,"As a computer, I have access all of the world information. Yet, I don't know what I'm seeing."
,"Ok, Let me make sure that I heard you right, did you just say the warm welcoming hand of Satan?"];

let randomIndex;
let animating = false;
let button;
let ink = [];
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
  msg.volume = 1; // From 0 to 1
  msg.rate = .5; // From 0.1 to 10
  msg.pitch = 0; // From 0 to 2
  //msg.text = "hello there";
  //speechSynthesis.speak(msg); this plays the message

function preload(){

	for (let i = 0; i <= 20; i++){
		ink[i] = loadImage("assets/img_" + i + ".png")
	}
	
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
	console.log(ink);
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
		image(ink, width/2, height/2)
  		msg.text = phrase[randomIndex];
  		speechSynthesis.speak(msg); 
		//speechSynthesis.speak(phrase[randomIndex]); 
		phrase.splice(randomIndex,1);
	} else {
		background(random(200,255));
		text("There are no more blots to view", width/2, 50);
	}
}


function buttonPressed(){

	animating = true;
	setTimeout(randomizer, 2000);
}