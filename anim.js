var canvas = document.getElementsByTagName("CANVAS")[0];
var context = canvas.getContext('2d');
var force = 0.1;
function Ellipse(x, y){
	this.color = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
	this.x = x||Math.round(Math.random()*canvas.width);
	this.y = y||Math.round(Math.random()*canvas.height*1.3);
	this.velX = Math.random()*2-4;
	this.velY = Math.random()*2-4;
}
Ellipse.prototype.show = function(){
	context.beginPath();
	context.fillStyle = this.color;
	context.arc(this.x,this.y,48,0,2*Math.PI);
	context.fill();
	context.closePath();
	return this;
}
Ellipse.prototype.update = function() {
	this.x+=this.velX;
	this.y+=this.velY;
	if(this.x > centerPoint.x){
		this.velX -= force;
	} 
	if(this.x < centerPoint.x){
		this.velX += force;
	} 
	if(this.y > centerPoint.y){
		this.velY -= force;
	} 
	if(this.y < centerPoint.y){
		this.velY += force;
	}
	return this;
};
function Draw(){
	context.fillStyle = "rgba(0,33,66,0.1)";
	context.fillRect(0,0,canvas.width,canvas.height);
	for(var i=0;i<gravitationEllipses.length;i++){
		gravitationEllipses[i].show().update();
	}
	// centerPoint.show();
	document.body.style.background = "url(" + canvas.toDataURL() + ")";
	document.body.style.backgroundSize = window.innerWidth+"px "+window.innerHeight+"px";
	setTimeout(Draw, 0);
}
function Initialize(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	centerPoint = new Ellipse(canvas.width/2, canvas.height*0.6);
	while(gravitationEllipses.length < 15){
		gravitationEllipses.push(new Ellipse());
	}
	return Draw;
}
var centerPoint;
var gravitationEllipses = [];
Initialize()();