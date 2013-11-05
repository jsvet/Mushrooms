var Game = {};
Game.stage = new createjs.Stage( $("#stage") );
Game.stageWidth = $("#stage").width;

Game.showSplash = function(){
	var btnColor = "#fff",
		btnHoverColor ="#C00",
		startGameBtn = new createjs.Text("PLAY NOW", "24px Impact", btnColor);
	
	startGameBtn.x = (Game.stageWidth / 2) - (startGameBtn.getMeasuredWidth() / 2);
	startGameBtn.y = 130;
	Game.stage.addChild(startGameBtn);
	Game.stage.update();
	
	Game.stage.enableMouseOver(15);
	startGameBtn.onMouseOver = function(){
		startGameBtn.color = btnHoverColor;
		Game.stage.update();
	};
	
	startGameBtn.onMouseOut = function(){
		startGameBtn.color = btnColor;
		Game.stage.update();
	};
	
	startGameBtn.onClick = function(){
		Game.stage.removeAllChildren();
		Game.showMain();
	};
};

Game.showSplash();

Game.showMain = function(){
	Game.stage.addChild( new Game.mushroom(100, 100) );
	Game.stage.addChild( new Game.mushroom(200, 100) );
	Game.stage.update();
};

Game.mushroom = function( myX, myY){
	var my = new createjs.Bitmap("img/small-mushroom.png");
	my.x = myX;
	my.y = myY;
	
	my.onClick = function(){
		my.rotation += 10;
		Game.stage.update();
	};
	return my;
};

var Greeter = function (friend){
	var myFriend = friend;
	
	this.greeting = "Goodmorning";
	
	this.sayHello = function (){
		return this.greeting + " " + myFriend;
	};
};

var brennan = new Greeter("Brennan");
brennan.greeting = "hullo";

//brennan.myFriend = "Keld";

var test = brennan.sayHello();
console.log(test);
