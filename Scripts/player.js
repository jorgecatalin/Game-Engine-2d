var Player = function(viteza,width,height){
   this.viteza=viteza;
   this.speed=0;
   this.speedH=0;
   this.x=500;
   this.y=500;
   this.angle;
   this.width=width;
   this.height=height;
   this.lastX=this.x;
   this.lastY=this.y;
   this.vel=0;
   this.pamant=false;
   this.tavan=false;
   this.spawnX=500;
   this.spawnY=500;
   this.directie=true;
   this.directiee=0;
   this.frame=0;
   this.colide=false;
   this.viata=100;
   this.invincible=30;
   this.vitezaDreapta=0;
   this.vitezaStanga=0;


   this.update=function(){
    if(this.invincible>=1)
      this.invincible--;
    if(this.viata<=0){
      this.viata=0;
      schimbaGS(2);
        document.getElementById("meniuDeath").style.display="none";
        document.getElementById("overlay").style.display="flex";
    }
       this.lastW=this.x+this.width;
	   this.lastH=this.y+this.height;
	   this.lastX=this.x;
	   this.lastY=this.y;
	 this.y+=1;
	  if(this.pamant){
		  if(!dreapta&&!stanga)
		  this.frame=0;
      this.speedH=0;
	   if(sus){
		  this.speedH=-20;}
		  }
		  if(!this.pamant)
		  this.frame=300
	  if(this.speedH<20)this.speedH+=1;
	  if(this.tavan)this.speedH=0;


	  if(dreapta){
      this.directiee=0;
      this.directie=true;
      if(this.speed<10){
        this.speed+=this.viteza;
      }
    }
    else
      if(this.speed>0)
        this.speed-=this.viteza;
	  

	  if(stanga){
      this.directiee=60;
      this.directie=false;
      if(this.speed>-10)
        this.speed-=this.viteza;
    }
	  else 
    if(this.speed<0)
      this.speed+=this.viteza;
   


      if(this.pamant&&(dreapta||stanga))animatie(this);



	  this.y+=this.speedH;
	  this.x+=this.speed;
      this.pamant=false;
	  this.tavan=false;
	  if(this.x<perete.x+perete.width){
		  gameState=2;
	  }
	  if(this.colide){
	   this.colide=false;
     

    }
	}
   this.draw = function(){
       ctx.drawImage(img.player,this.frame,this.directiee,50,60,this.x,this.y,this.width,this.height);
   }

}

var player = [];
  player[0]=new Player(0.5,50,60);