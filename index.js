console.log("begin");

var start = document.getElementById("dvd");
var c = document.getElementById("canvas");
var canvas = c.getContext("2d");
var balls = [];

start.addEventListener("click", function() {
    var ball = makeBall();
    balls.push(ball);
    console.log(balls);
    window.setInterval(drawAll, 50);
});

function drawAll(){
    canvas.clearRect(0, 0, 538, 538);
    for (var i = 0; i < balls.length; i++) {
	console.log("inside loop");
	balls[i].move();
	canvas.beginPath();
	canvas.arc(balls[i].dx, balls[i].dy, 25, 0, 2*Math.PI);
	//console.log("balls[i].dx: "+balls[i].dx);
	canvas.fillStyle = "#ff6c24" //orange
	canvas.stroke();
	canvas.fill();
	canvas.closePath();
    }
}




function makeBall() {

    var dx = 0;
    var dy = 0;
    var vertical = true;
    var horizontal = true;
    function move() {
	//console.log("inside move");
        if(horizontal){
            this.dx++;
	    //console.log("dx: "+dx);
            if(this.dx + 100 == 538){
                horizontal = false;
            } if(vertical){
                this.dy++;
                if(this.dy + 52 == 538){
                    vertical = false;
                }
            } else{
                this.dy--;
                if(this.dy == 0){
                    vertical = true;
                }
            }
        } else{
            this.dx--;
            if(this.dx == 0){
                horizontal = true;
            } if(vertical){
                this.dy++;
                if(this.dy + 52 == 538){
                    vertical = false;
                }
            } else{
                this.dy--;
                if(this.dy == 0){
                    vertical = true;
                }
            }
        } 
    }
    return {
	move : move,
	dx : dx,
	dy : dy
    }
}


console.log("end");
