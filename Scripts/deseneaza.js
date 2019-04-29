
var deseneaza=function(){
	
	ctx.setTransform(1,0,0,1,0,0);//reset the transform matrix as it is cumulative
    ctx.clearRect(0,0,WIDTH,HEIGHT);

    //camera centrata sa fie in mijloc playeru                                          
    var camX = clamp(-player[0].x + WIDTH/2, -2620, 1024 - WIDTH);
    var camY = clamp(-player[0].y + HEIGHT/2, -1110, 756 - HEIGHT);
//console.log(player[0].x,player[0].y);
    ctx.translate( camX, camY );    
    cx=camX;
	cy=camY;
    //sub asta desenez tot!!
	if(gameState==0){
        document.getElementById("meniuStart").style.display="flex";
	}
	
	
	if(gameState==1||gameState==2||gameState==3){
     ctx.drawImage(img.gameBackground,-cx,-cy,1024,768);
     for(i=0;i<tileee.length;i++){
        tileee[i].draw();
     }
     for(i=0;i<enemy.length;i++){
         enemy[i].draw();
     }
     player[nr].draw();
     for(i=0;i<carti.length;i++){
     carti[i].draw();
     }
     for(i=0;i<particule.length;i++){
	  particule[i].draw();
     }
     for(i=0;i<particuleF.length;i++){
	  particuleF[i].draw();
     }
     for(i=0;i<firebals.length;i++){
	 firebals[i].draw();
	 
   
     }
		perete.draw();
    for(i=0;i<particuleBoom.length;i++){
     particuleBoom[i].draw();}
   }
   
   if(gameState==2){
        document.getElementById("meniuDeath").style.display="flex";
        document.getElementById("overlay").style.display="none";
	}
   if(gameState==3){
        document.getElementById("meniuPauza").style.display="flex";
        document.getElementById("overlay").style.display="none";
    }
} 