var cX=0,cY=0;
var miscaMouse = function(){
    //unghi mouseului
    var mouseangle = radiantiToGrade(Math.atan2(posY-(player[nr].y+player[nr].height/2),posX-(player[nr].x+player[nr].width/2)));
    //ceva
	player[nr].angle = mouseangle;
         posX=cX/(w/WIDTH)-cx;   
         posY=cY/(h/HEIGHT)-cy;
}
document.onmousemove = function(event){
         cX=event.clientX;
		 cY=event.clientY;
		// if(gameState==1){
		// particule.push(new Particule(posX,posY,10,10,10,"red",Math.random()*4-2,5,true))
		// }
}