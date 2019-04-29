var Enemy = function(x,y,width,height,image,health,damage){
	this.x=x;
	this.y=y;
	this.height=height;
	this.width=width;
	this.health=health;
	this.damage=damage;
	this.tip='enemy';
	this.draw=function(){
		ctx.drawImage(image,this.x,this.y,height,width);
	}

}

var enemy = [];