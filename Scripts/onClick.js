document.onclick = function(){
	if(gameState==1){
for(i=0;i<carti.length;i++){
  if(posX>carti[i].x && posX<carti[i].x+carti[i].width && posY>carti[i].y && posY<carti[i].y+carti[i].height && carti[i].over==false){
     carti[i].over=true;
    }
  else{
  carti[i].over=false;
   }
  }
	}
   
   /*
   //firebals.push(new Fireball(30,30,240,5));
   if(gameState==0){
  // click(meniuri[1],schimbaGS)
   }
   if(gameState==1){
  // click(ui[2],schimbaGS);
   //click(ui[3],restart);
   }
   if(gameState==2){
	 //  click(meniurii[1],restart)
   }

   */
}
