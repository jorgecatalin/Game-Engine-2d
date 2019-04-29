var buton = function(x,y,width,height,color,text,textColor,txtY,txtX,txtSize,over){
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.color=color;
	this.text=text;
	this.textColor=textColor;
	this.update = function(){
		
	}
	this.draw = function(){
		ctx.font = txtSize+" Comic Sans MS";
		ctx.fillStyle=this.color;
		if(hover(this))ctx.fillStyle=over;
		ctx.fillRect(this.x-cx,this.y-cy,this.width,this.height);
		ctx.strokeStyle=this.textColor;
		ctx.fillStyle=this.textColor;
		ctx.fillText(this.text,this.x-cx+txtX,this.y-cy+txtY)
	}
	
}
var meniuri=[];
meniuri[1]=new buton(WIDTH/2.5,HEIGHT/4,200,100,'rgba(1,1,1,0.9)','START','white',50,50,'30px','rgba(1,221,1,0.9)');
meniuri[2]=new buton(WIDTH/2.5,HEIGHT/2,200,100,'rgba(1,1,1,0.9)','Optiuni','white',50,50,'30px','rgba(55,55,55,0.9)');

var ui = [];
ui[0] = new buton(WIDTH/8,HEIGHT-50,WIDTH/1.4,50,'rgba(1,1,1,0.6)',' ');
ui[1] = new buton(WIDTH/8,HEIGHT-50,20,50,'grey',' ');
ui[2] = new buton(ui[0].x+20,ui[0].y+5,100,40,'rgba(1,1,1,0.8)','pauza','white',25,10,'30px','rgba(55,1,255,0.9)');
ui[3] = new buton(ui[0].x+125,ui[0].y+5,100,40,'rgba(1,1,1,0.8)','reset','white',25,10,'30px','rgba(155,1,155,0.9)');
ui[4] = new buton(ui[0].x+230,ui[0].y+5,500,40,'rgba(1,1,1,0.8)','1-creaza cutii 2-creaza fireball','white',25,10,'30px');

var meniurii=[];
meniurii[0]=new buton(WIDTH/2.5,HEIGHT/5.1,200,100,'rgba(1,1,1,0)','Ai pierdut!','white',50,-80,'70px');
meniurii[1]=new buton(WIDTH/2.5,HEIGHT/3,200,100,'rgba(1,1,1,0.9)','Restart','white',50,50,'30px','rgba(255,155,1,0.9)');
meniurii[2]=new buton(WIDTH/2.5,HEIGHT/2.1,200,100,'rgba(1,1,1,0.9)','Scor','white',50,70,'30px','rgba(255,155,1,0.9)');