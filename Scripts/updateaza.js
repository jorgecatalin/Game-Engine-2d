var updateaza = function(){

   
   miscaMouse();
   if(gameState==0){
		//for(i=1;i<meniuri.length;i++){
		//	meniuri[i].update();
		//}
   }  
   if(gameState==2){
	   //	for(i=0;i<meniurii.length;i++){
		//	meniurii[i].update();
		//}
   }
   if(gameState==1)
   {

   player[nr].update();
   perete.colide();
  
   for(i=0;i<carti.length;i++){
   carti[i].update();}
   
   for(i=0;i<particule.length;i++){
      particule[i].update();
   if(particule[i].timp<=0){
      particule.shift();
	 }
   }
   
   for(i=0;i<particuleF.length;i++){
      particuleF[i].update();
	  
   if(particuleF[i].timp<=0){
      particuleF.shift();
   }
   }
   
   for(i=0;i<firebals.length;i++){
     firebals[i].update();
	 
  if(firebals[i].time<0)
	 firebals.shift();
   }
   
   for(i=0;i<particuleBoom.length;i++){
     particuleBoom[i].update();
	if(particuleBoom[i].timp<0)
	  particuleBoom.shift();
   }


   for(i=0;i<tileee.length;i++){
      tileee[i].update();
   }


   if(fireballCooldown>0){
      fireballCooldown--;
   }
   else{
      fireballCool.classList.remove("fireballClas");
   }
   if(boxCooldown>0){
      boxCooldown--;
   }
   else{
      boxCool.classList.remove("boxClas");
   }
   if(teleportCooldown>0){
      teleportCooldown--;
   }
   else{
      teleportCool.classList.remove("teleportClas");
   }

   document.getElementById("viata").innerText=player[0].viata+"/100";
   document.getElementById("health").style.width=player[0].viata+"%";
   coliziuni();
   }
}