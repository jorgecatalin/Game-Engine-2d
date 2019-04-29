var Carte = function(width,height,x,y,over,culoare,colide,spawnX,spawnY){
   this.x=x;
   this.y=y;
   this.width=width;
   this.height=height;
   this.over=over;
   this.colide=colide;
   this.culoare=culoare;
   this.lastX=this.x;
   this.lastY=this.y;
   this.spawnX=spawnX;
   this.spawnY=spawnY;
   this.colide = function(){
   	HEALTH-=5;
   }
   this.update = function(){
	   
       this.lastX=this.x;
	   this.lastY=this.y;
       if(this.over){
	     this.x = posX-this.width/2;
		 this.y = posY-this.height/2;
	   }
	      // this.y+=1;
		   
	   }
	this.draw = function(){
	  
       ctx.fillStyle=this.culoare;
	   ctx.drawImage(img.cutie,this.x,this.y,this.width,this.height);
	
	}
}
var carti=[];
/////
var Fireball = function(w,h,time,viteza){
    this.x=player[nr].x+player[nr].width/2;
	this.y=player[nr].y+player[nr].height/2;
	this.width=w;
	this.height=h;
	this.time=time;
	this.viteza=viteza;
	this.lastX;
	this.lastY;
	this.speedX=Math.cos(player[nr].angle/180*Math.PI)*this.viteza;
	this.speedY=Math.sin(player[nr].angle/180*Math.PI)*this.viteza;
	this.colide=false;
	this.update = function(){
	
	this.lastX=this.x;
	this.lastY=this.y;
	   this.x+=this.speedX;
	   this.y+=this.speedY;
	   this.time--;console.log();
	   if(this.time%5==0)
	   particuleF.push(new Particule(this.x+this.width/2,this.y+this.height/2,15,14,14,"orange",0,0,false,false))
	
	}
	this.draw = function(){
	
	
	   ctx.drawImage(img.firebal,this.x,this.y);
	}

}
var firebals = [];




var Wall = function(width,height,x,y,over,culoare,colide,spawnX,spawnY){
   this.x=x;
   this.y=y;
   this.width=width;
   this.height=height;
   this.over=over;
   this.colide=colide;
   this.culoare=culoare;
   this.lastX=this.x;
   this.lastY=this.y;
   this.spawnX=spawnX;
   this.spawnY=spawnY;
   this.colide = function(){

   }
   this.update = function(){
	this.x+=0.3;
	   }
	this.draw = function(){
	  
	   ctx.drawImage(img.wall,this.x,-cy,200,1000);
	
	}
}













var perete=new Wall(5,1500,-cx-200,-cy,false,"rgba(255,10,10,0.5)",false,-cx-200);
perete.colide = function(){
	this.x+=0.3;
}

var UTILITATE = function(x,y,width,height,aspect){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.aspect=aspect;
	this.update = function(){
		
	}
	this.draw = function(){
		
	   ctx.drawImage(this.aspect,this.x,this.y,this.width,this.height);
	}
}







var Carte = function(width,height,x,y,over,culoare,colide,spawnX,spawnY){
   this.x=x;
   this.y=y;
   this.width=width;
   this.height=height;
   this.over=over;
   this.colide=colide;
   this.culoare=culoare;
   this.lastX=this.x;
   this.lastY=this.y;
   this.spawnX=spawnX;
   this.spawnY=spawnY;
   this.colide = function(){
   	HEALTH-=5;
   }
   this.update = function(){
	   
       this.lastX=this.x;
	   this.lastY=this.y;
       if(this.over){
	     this.x = posX-this.width/2;
		 this.y = posY-this.height/2;
	   }
	      // this.y+=1;
		   
	   }
	this.draw = function(){
	  
       ctx.fillStyle=this.culoare;
	   ctx.drawImage(img.cutie,this.x,this.y,this.width,this.height);
	
	}
}
var carti=[];
/////
var Fireball = function(w,h,time,viteza){
    this.x=player[nr].x+player[nr].width/2;
	this.y=player[nr].y+player[nr].height/2;
	this.width=w;
	this.height=h;
	this.time=time;
	this.viteza=viteza;
	this.lastX;
	this.lastY;
	this.speedX=Math.cos(player[nr].angle/180*Math.PI)*this.viteza;
	this.speedY=Math.sin(player[nr].angle/180*Math.PI)*this.viteza;
	this.colide=false;
	this.update = function(){
	
	this.lastX=this.x;
	this.lastY=this.y;
	   this.x+=this.speedX;
	   this.y+=this.speedY;
	   this.time--;console.log();
	   if(this.time%5==0)
	   particuleF.push(new Particule(this.x+this.width/2,this.y+this.height/2,15,14,14,"orange",0,0,false,false))
	
	}
	this.draw = function(){
	
	
	   ctx.drawImage(img.firebal,this.x,this.y);
	}

}
var firebals = [];




var Wall = function(width,height,x,y,over,culoare,colide,spawnX,spawnY){
   this.x=x;
   this.y=y;
   this.width=width;
   this.height=height;
   this.over=over;
   this.colide=colide;
   this.culoare=culoare;
   this.lastX=this.x;
   this.lastY=this.y;
   this.spawnX=spawnX;
   this.spawnY=spawnY;
   this.colide = function(){

   }
   this.update = function(){
	this.x+=0.3;
	   }
	this.draw = function(){
	  
	   ctx.drawImage(img.wall,this.x-150,-cy-100,200,1000);
	
	}
}













var perete=new Wall(5,1500,-cx-200,-cy,false,"rgba(255,10,10,0.5)",false,-cx-200);
perete.colide = function(){
	this.x+=0.3;
}

var UTILITATE = function(x,y,width,height,aspect){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.aspect=aspect;
	this.update = function(){
		
	}
	this.draw = function(){
		
	   ctx.drawImage(this.aspect,this.x,this.y,this.width,this.height);
	}
}







