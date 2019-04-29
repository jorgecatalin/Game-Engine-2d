var radiantiToGrade = function(unghi){
   return unghi * (180 / Math.PI);
}
function clamp(value, min, max){
    if(value < min) return min;
    else if(value > max) return max;
    return value;
}
var sari = function(h,vel){
	this.vel=vel;
	
}
var inEcran = function(x,y,w,h){
	if(y<cy+HEIGHT&&
	   y+h>cy&&
	   x<cx+WIDTH&&
	   x+w>cx
	)
	return true;
}
var schimbaGS = function(gs=1){
	gameState=gs;
}
var click = function(lucru,functie){
	if(posX>lucru.x-cx && posX<lucru.x-cx+lucru.width && posY>lucru.y-cy && posY<lucru.y-cy+lucru.height){
		functie();
    }
}
var reset = function(){
	player[0].x=player[0].spawnX;
	player[0].y=player[0].spawnY;
}
var inBound = function(asta){
	if(asta.x>-cx-100 && asta.y>-cy-100 && asta.x<-cx+WIDTH+100 && asta.y<-cy+HEIGHT+100){return true; }
	else {return false;}
}
var aTime=0,aFrame=1;
var animatie = function(asta){
	aTime+=1;
	if(aTime%20==0){
		aFrame++;
		asta.frame=asta.width*aFrame;
	}
	if(aFrame==5){
		aFrame=0;
	}
}
var restart = function(){
	carti.splice(0,carti.length);
	gameState=1;
	player[0].x=player[0].spawnX;
	player[0].y=player[0].spawnY;
	perete.x=perete.spawnX;
	dreapta=false;
	stanga=false;
	sus=false;
	player[0].viata=100;
	seteazaTileee();
	
}

var teleport = function(asta){
	for(i=0;i<=10;i++){
		particule.push(new Particule(asta.x+asta.width/2,asta.y+asta.height/2,20,20,18,'rgba(220,30,50,0.5)',Math.random()*4-2,Math.random()*4-2,false,false));
	}
		asta.lastX=asta.x;
		asta.lastY=asta.y;

		asta.x=posX;
		asta.y=posY;
		coliziuni();
		if(!asta.colide){
			asta.speed=0;
			asta.speedH=0;

		}
		else{
			asta.x=asta.lastX;
			asta.y=asta.lastY;
		}

		coliziuni();

	for(i=0;i<=10;i++){
		particule.push(new Particule(posX+asta.width/2,posY+asta.height/2,20,20,18,'rgba(20,20,150,0.5)',Math.random()*4-2,Math.random()*4-2,false,false))
	}
	
}
var hover = function(asta){
	if(posX>asta.x-cx && posX<asta.x-cx+asta.width && posY>asta.y-cy && posY<asta.y-cy+asta.height ){
	return true;}
	 else{
		 return false;
	 }
    }
