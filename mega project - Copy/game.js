class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      p1=createSprite(320,500,20,20);
      p1.addImage("p1",p1_img);
      p1.scale=0.5;
   
      p2=createSprite(350,500,20,20)
      p2.addImage("p2",p2_img);
      players=[p1,p2]
    }
    play(){
        form.hide();
    
        Player.getPlayerInfo();
        
        if(allPlayers !== undefined){
          background(rgb(198,135,103));

         //index of the array
          var index = 0;
          var x =100;
          var y=200;
          for(var plr in allPlayers){
            //add 1 to the index for every loop
            x=x+200;
            index = index + 1 ;
            players[index-1].x = World.mouseX;
            players[index-1].y = World.mouseY;

            if (index === player.index){
                players[index - 1].shapeColor = "red";
                camera.position.x = displayWidth/2;
                camera.position.y = players[index-1].y;
              }
             
    
          
          
          
              drawSprites();
    
    }
}
    }
    end(){
        console.log("Game Ended");
      }
    
}
