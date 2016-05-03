console.log("begin");

var start = document.getElementById("dvd");
var c = document.getElementById("canvas");
var canvas = c.getContext("2d");
var balls = [];

var radius = 25;

start.addEventListener("click", function() {
    var ball = makeBall();
    balls.push(ball);
    console.log(balls);
    window.setInterval(drawAll, 16);
});

function drawAll() {
    canvas.clearRect(0, 0, 538, 538);
    for (var i = 0; i < balls.length; i++) {
	console.log("inside loop");
	balls[i].move();
	canvas.beginPath();
	canvas.arc(balls[i].dx, balls[i].dy, radius, 0, 2*Math.PI);
	//console.log("balls[i].dx: "+balls[i].dx);
	canvas.fillStyle = "#ff6c24" //orange
	canvas.stroke();
	canvas.fill();
	canvas.closePath();
    }
}


function makeBall() {

    var dx = (538+100)/2;
    var dy = (538+100)/2;
    var v = 1; //velocity
    var vertical = (Math.random()*100 > 50);
    var horizontal = (Math.random()*100 > 50);
    
    function move() {
	for (var i = 0; i < balls.length; i++) {
	    var other = balls[i];
	    if (other != this){
	    	if ( Math.abs( this.dx - other.dx ) < radius ) {
	    	    this.horizontal = !this.horizontal;
	    	    other.horizontal = !other.horizontal;
		}
	    	if ( Math.abs( this.dy - other.dy ) < radius ) {
	    	    this.vertical = !this.vertical;
	    	    other.vertical = !other.vertical;
		}
	    }
	}


	//console.log("inside move");
        if(this.horizontal){
            this.dx+=v;
	    //console.log("dx: "+dx);
            if(this.dx + 100 == 538){
                this.horizontal = false;
            } if(this.vertical){
                this.dy+=v;
                if(this.dy + 52 == 538){
                    this.vertical = false;
                }
            } else{
                this.dy-=v;
                if(this.dy == 0){
                    this.vertical = true;
                }
            }
        } else{
            this.dx-=v;
            if(this.dx == 0){
                this.horizontal = true;
            } if(this.vertical){
                this.dy+=v;
                if(this.dy + 52 == 538){
                    this.vertical = false;
                }
            } else{
                this.dy-=v;
                if(this.dy == 0){
                    this.vertical = true;
                }
            }
        } 
    }
    return {
	move : move,
	dx : dx,
	dy : dy,
	v : v,
	vertical,
	horizontal
    }
}


console.log("end");
