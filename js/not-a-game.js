var Game = {};
Game.stage = new createjs.Stage( $("#stage") );
Game.stageWidth = $("#stage").width;

Game.showSplash = function(){
    console.log("splash");
    var btnColor = "#fff",
    btnHoverColor ="#C00",
    startGameBtn = new createjs.Text("PLAY NOW", "24px Impact", btnColor);
	
    startGameBtn.x = (Game.stageWidth / 2) - (startGameBtn.getMeasuredWidth() / 2);
    
    //Thomas changed a value to reflect the small canvas height
    startGameBtn.y = 20;
    //code was
    //startGameBtn.y = 130;
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
	
    //Thomas changed event handling
    //code was:
    //startGameBtn.onClick = function(){
    startGameBtn.addEventListener("click", function(){
        Game.stage.removeAllChildren();
        Game.showMain();
    });
};

Game.showSplash();

Game.showMain = function(){
    //Thomas changed value to reflect the small canvas height
    Game.stage.addChild( new Game.mushroom(100, 20) );
    Game.stage.addChild( new Game.mushroom(200, 20) );
    Game.stage.update();
};

Game.mushroom = function( myX, myY){
    var my = new createjs.Bitmap("img/small-mushroom.png");
    my.x = myX;
    my.y = myY;
	
    //Thomas changed event handling
    //code was
    //my.onClick = function(){
    my.addEventListener("click", function(){
        my.rotation += 10;
        Game.stage.update();
    });
    return my;
};
