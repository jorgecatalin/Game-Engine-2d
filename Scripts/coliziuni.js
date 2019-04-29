var coliziune = function(lucru1,lucru2,acelasi,stanga,dreapta,sus,jos){
   for(i=0;i<lucru1.length;i++){var colide=false,num;
     for(j=0;j<lucru2.length;j++){
	 if((i!=j&&acelasi)||(acelasi==false))
	    if(lucru1[i].x < lucru2[j].x+lucru2[j].width &&
		   lucru1[i].x+lucru1[i].width > lucru2[j].x && 
		   lucru1[i].y < lucru2[j].y+lucru2[j].height &&
		   lucru1[i].y+lucru1[i].height > lucru2[j].y)
	     {colide=true;colidee++;num=j}
	
	 }
	 
	 if(colide){
	 	if(lucru2!=enemy){
		 lucru1[i].colide=true;
		 lucru1[i].x=lucru1[i].lastX;
		 lucru1[i].y=lucru1[i].lastY;
		}

	 if(lucru1==firebals&&lucru2==carti){
		 for(var zz=1;zz<20;zz++)
		 			particule.push(new Particule(lucru2[num].x,lucru2[num].y,20,20,15,"rgb(120,45,1)",Math.random()*6-3,Math.random()*6-3,true,false))

	   particuleBoom.push(new Particule(firebals[i].lastX,firebals[i].lastY,30,222,50,"green",0,0,false,true));
	   lucru2.splice(num,1);
	   lucru1.splice(i,1);
	 }
	 else
		 if(lucru2==tileee&&lucru1==firebals){
		   particuleBoom.push(new Particule(firebals[i].lastX,firebals[i].lastY,30,222,50,"green",0,0,false,true));
		   
		   lucru2[num].speedY+=lucru1[i].speedY;
		   lucru2[num].speedX+=lucru1[i].speedX;

		    lucru1.splice(i,1);
		 	lucru2[num].health-=5;
		 	if(lucru2[num].health<=0){

		 		for(var zz=1;zz<20;zz++)
		 			particule.push(new Particule(lucru2[num].x,lucru2[num].y,20,20,15,"rgb(120,45,1)",Math.random()*6-3,Math.random()*6-3,true,false))

		 		lucru2.splice(num,1);

		 	}
		 }

		 	if(lucru2==enemy&&lucru1==player){
		 		if(player[0].invincible==0){
		 			player[0].viata-=5;
		 			player[0].invincible=30;
		 		}
		 	}
		 
	  }
	 else {
	 	lucru1[i].colide=false;
      }
   }
}
var coliziuni = function(){
     coliziune(carti,carti,true);
    for(i=0;i<carti.length;i++){
		colide(player[0],carti[i]);
			if(carti[i].x<perete.x){
		 		 	for(var zz=1;zz<5;zz++)
		 				particule.push(new Particule(carti[i].x,carti[i].y,20,20,15,"rgb(120,45,1)",Math.random()*6-3,Math.random()*6-3,true,false))

		 		 carti.splice(i,1);
			  }
	}
	 coliziune(firebals,carti,false);
	 coliziune(firebals,tileee,false);
	// tiles[0].coliziune();
	 coliziune(player,enemy,false);

	for(i=0;i<tileee.length;i++){
		if(inBound(tileee[i])){
		  colide(player[0],tileee[i]);
			if(tileee[i].x<perete.x){
		 		 	for(var zz=1;zz<5;zz++)
		 				particule.push(new Particule(tileee[i].x,tileee[i].y,20,20,15,"rgb(120,45,1)",Math.random()*6-3,Math.random()*6-3,true,false))

		 		 tileee.splice(i,1);
			  }
			}

		}
     }
var colide = function(lucru1,lucru2){
	if(lucru1.x < lucru2.x+lucru2.width &&
		   lucru1.x+lucru1.width > lucru2.x && 
		   lucru1.y < lucru2.y+lucru2.height &&
		   lucru1.y+lucru1.height > lucru2.y)
		   {if(lucru1.lastH<=lucru2.y||lucru1.lastY>=lucru2.y+lucru2.height){
			  lucru1.y=lucru1.lastY;
			  if(lucru1.lastH<=lucru2.y)lucru1.pamant=true;
			  if(lucru1.lastY>=lucru2.y+lucru2.height)lucru1.tavan=true;
		  }else
	      if(lucru1.lastW<=lucru2.x||lucru1.lastX>=lucru2.x+lucru2.width){
			  lucru1.x=lucru1.lastX;
		  } 
		  lucru1.colide=true;
		  
	       }
	  
}