var key,fireballCooldown=0,boxCooldown=0,teleportCooldown=0;
var fireballCool=document.getElementById("fireballCooldown"),
boxCool=document.getElementById("cutieCooldown"),
teleportCool=document.getElementById("teleportCooldown");




document.onkeydown = function(event){
	if(gameState==1){
   key=event.which;

   
   if(key==49&&boxCooldown==0)
	   if(carti.length<500){
	   carti.push(new Carte(40,40,posX-20,posY-20,true,"black",false));
     boxCooldown=60;

      boxCool.classList.add("boxClas");
   }


   if(key==50&&fireballCooldown==0){
    firebals.push(new Fireball(30,30,240,5));
    fireballCooldown=15; 

      fireballCool.classList.add("fireballClas");
    }



   if(key==51&&teleportCooldown==0){
	   teleport(player[0])
     teleportCooldown=180;


      teleportCool.classList.add("teleportClas");
   }
   if(key==68){
     dreapta=true;
   }
   if(key==65){
     stanga=true;
   }
   if(key==87){
     sus=true;
   }
}
}
document.onkeyup = function(event){
	if(gameState==1){
   key=event.which;
   if(key==68){
     dreapta=false;
   }
   if(key==65){
     stanga=false;
   }
   if(key==87){
     sus=false;
   }
	}
}

