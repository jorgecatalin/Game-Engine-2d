 h=document.getElementById("b").offsetHeight;
  w=document.getElementById("b").offsetWidth;
  document.getElementById("ctx").style.width=w;
  document.getElementById("ctx").style.height=h;
  HEIGHT=document.getElementById("ctx").height;
  WIDTH=document.getElementById("ctx").width;
schimba = function(){
	h=document.getElementById("b").offsetHeight;
  w=document.getElementById("b").offsetWidth;
  document.getElementById("ctx").style.width=w;
  document.getElementById("ctx").style.height=h;
  schimbaa=true;
  }
setInterval(function(){if(schimbaa)
{
  h=document.getElementById("b").offsetHeight;
  w=document.getElementById("b").offsetWidth;
  document.getElementById("ctx").style.width=w;
  document.getElementById("ctx").style.height=h;

schimbaa=false;
}},2000);