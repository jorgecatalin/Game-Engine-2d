var Particule = function(x,y,width,height,timp,culoare,vitezaX,vitezaY,patrat,imagine){
   this.x=x;
   this.y=y;
   this.width=width;
   this.height=height;
   this.patrat=patrat;
   this.timp=timp;
   this.culoare=culoare;
   this.vitezaX=vitezaX;
   this.vitezaY=vitezaY;
   this.imagine=imagine;
   this.i=1;
   this.update = function(){
    this.y+=this.vitezaY;
	this.x+=this.vitezaX;
	this.timp--;
	this.width--;
	this.height--;
   }
   this.draw = function(){
   
	ctx.fillStyle=this.culoare;
	if(this.patrat){
	    ctx.fillRect(this.x,this.y,this.width,this.height);
	}
	else if(!this.patrat&&!this.imagine){
	    ctx.beginPath();
        ctx.arc(this.x,this.y,this.width,0,2*Math.PI);
		ctx.strokeStyle=this.culoare;
        ctx.stroke();
	    ctx.fill();
	}
	if(this.imagine){
	  if(this.timp%10==0){
	  
	    this.i++;
	  
	  }
	  if(this.i==1)
	  ctx.drawImage(img.boom1,this.x,this.y);
	  
	  if(this.i==2)
	  ctx.drawImage(img.boom2,this.x,this.y);
	  
	  if(this.i==3)
	  ctx.drawImage(img.boom3,this.x,this.y);
	  
	  if(this.i==4)
	  ctx.drawImage(img.boom4,this.x,this.y);
	  
	  if(this.i==5)
	  ctx.drawImage(img.boom5,this.x,this.y);
	}
      
   }
}
var particuleBoom=[];
var particuleF=[];
var particule=[];