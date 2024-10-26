console.clear();

// vars
let stage, spriteSheet, spriteImage, sprite, tl;

// sprite sheet data
let spriteSheetData = {
	frames: [
		// x, y, width, height
		[0,0,0,0],
		[0, 0, 264, 160],
		[264, 0, 264, 160],
		[528, 0, 264, 160],
		[792, 0, 264, 160],
		[0, 160, 264, 160],
		[264, 160, 264, 160],
		[528, 160, 264, 160],
		[792, 160, 264, 160],
		[0, 320, 264, 160],
		[264, 320, 264, 160],
		[528, 320, 264, 160],
		[792, 320, 264, 160],
		[0, 480, 264, 160],
	],
	animations: {
		dig: {
			frames: [1,2,2,2,2,1,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,6,6,5,5,4,4,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		}, 
	}
};

// sprite setup function
function setupSprite(e) {
	// add image to data object
	spriteSheetData.images = [spriteImage];
	
	// create spritesheet with data
	spriteSheet = new createjs.SpriteSheet(spriteSheetData);

	// create sprite and assign spritesheet to it
	sprite = new createjs.Sprite(spriteSheet);
	
	// tell sprite to use dig animation
	sprite.gotoAndStop("dig");
	
	// add sprite to stage
	stage.addChild(sprite);

	// update the canvas
	stage.update();
	
	// setup animation timeline
	tl = gsap.timeline({paused: true, repeat: -1, defaults:{ease: "none"}});
	tl
		.to(sprite, {currentAnimationFrame: gsap.utils.snap(1,spriteSheetData.animations["dig"].frames.length), duration: 2.5})
	;
	
	// onUpdate event to refresh canvas
	tl.eventCallback("onUpdate", () => {
		stage.update();
	});
	
	// play timeline
	tl.play();
}

// create stage with canvas element
stage = new createjs.Stage('constructionCanvas');

// create image element and preload it
spriteImage = new Image();
spriteImage.crossOrigin = "Anonymous";
spriteImage.onload = setupSprite;
spriteImage.src = "https://assets.codepen.io/128542/construction.png?v2";