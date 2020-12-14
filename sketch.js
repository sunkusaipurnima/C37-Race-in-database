
var database;

var gameState,playerCount;
var form,game,player;
var allPlayers;


function setup(){
    canvas=createCanvas(400,400);
    
    //creating database
    database= firebase.database();

    gameState=0;
    playerCount=0;

    game = new Game();
    game.getState();
    game.loginForm();

   
}

function draw(){

    if(playerCount===4){
        game.update(1);
    }

    if(gameState===1){
        clear();
        game.startRace();

    }
    
   
    
}

