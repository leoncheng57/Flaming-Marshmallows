/* Checking if javascript imported */
console.log("begin");

/* Getting variables */
var requestId;
var circle = document.getElementById("circle");
var stop = document.getElementById("stop");
var dvd = document.getElementById("dvd");
var can = document.getElementById("canvas");
var canvas = can.getContext("2d");
canvas.fillStyle = "#FFD1C1";

/* Setting variables */
var grow = true;
var x = can.width / 2;
var y = can.height / 2;
var r = 1;
var animation;

/* Animated Circle - OUTDATED SETINTERVAL */
/*
circle.addEventListener("click", function(){
    animation = setInterval(function(){
        console.log("circle!");
        canvas.clearRect(0, 0, 538, 538);
        canvas.beginPath();
        canvas.moveTo(x, y);
        canvas.arc(x, y, r, 0, 2*Math.PI);
        canvas.fill();
        canvas.closePath();
        if(grow){
            if(r<269){
                r++;
            } else{
                grow = false;
                r--;
            }
        } else{
            if(r>1){
                r--;
            } else{
                grow = true;
                r++;
            }
        }
    }, 5);
});
*/

/* NEW Animated Circle */
function draw(){
    console.log("circle!");
    canvas.clearRect(0, 0, 538, 538);
    canvas.beginPath();
    canvas.moveTo(x, y);
    canvas.arc(x, y, r, 0, 2*Math.PI);
    canvas.fill();
    canvas.closePath();
    if(grow){
        if(r<269){
            r++;
        } else{
            grow = false;
            r--;
        }
    } else{
        if(r>1){
            r--;
        } else{
            grow = true;
            r++;
        }
    } requestId = window.requestAnimationFrame(draw);
}
circle.addEventListener("click", function(){
    draw();
});

/* Stop button */
stop.addEventListener("click", function(){
    console.log("clear");
    ///clearInterval();
    window.cancelAnimationFrame(requestId);
    window.cancelAnimationFrame(requestID);
});

/* DVD logo */
var logo = new Image();
var dx = 0;
var dy = 0;
var horizontal = true;
var vertical = true;
var requestID;
function dvdanim(){
    console.log("dvd!");
    canvas.clearRect(0, 0, 538, 538);
    canvas.drawImage(logo, dx, dy, 100, 52);
    if(horizontal){
        dx++;
        if(dx + 100 == 538){
            horizontal = false;
        } if(vertical){
            dy++;
            if(dy + 52 == 538){
                vertical = false;
            }
        } else{
            dy--;
            if(dy == 0){
                vertical = true;
            }
        }
    } else{
        dx--;
        if(dx == 0){
            horizontal = true;
        } if(vertical){
            dy++;
            if(dy + 52 == 538){
                vertical = false;
            }
        } else{
            dy--;
            if(dy == 0){
                vertical = true;
            }
        }
    }
    /*if(horizontal){
        dx++;
        console.log("" + dx + "+" + 100);
        if(dx + 100 == can.width){
            horizontal = false;
        }
    } else{
        dx--;
        if(dx == 0){
            horizontal = true;
        }
    }*/
    requestID = window.requestAnimationFrame(dvdanim);
} logo.src = "logo_dvd.jpg";
dvd.addEventListener("click", function(){
    dvdanim();
});

/* Checking that program ran through file */
console.log("end");