console.log("begin");

var start = document.getElementById("dvd");
var c = document.getElementById("canvas");
var canvas = c.getContext("2d");
var logos = [];

start.addEventListener("click", function(){
    var dvd = makeDVD();
    logos.push(dvd);
//    dvd.update();
    dvd.move();
    console.log(logos);
});

function drawAll(){
    canvas.clearRect(0, 0, 538, 538);
    for (var i = 0; i<logos.length; i++){
	canvas.drawImage(logos[i].image, logos[i].dx, logos[i].dy, 100, 52);
    }
    var requestID = window.requestAnimationFrame(drawAll);
}
drawAll();

function makeDVD(){
    var image = new Image();
    image.src = "logo_dvd.jpg";
    var dx = 0;
    var dy = 0;
    var begin = false;
    var vertical = true;
    var horizontal = true;
    var requestID;
    // function draw(){
    //     //console.log("draw");
    //     canvas.clearRect(0, 0, 538, 538);
    //     canvas.drawImage(image, dx, dy, 100, 52);
    // }
    function move(){
        //console.log("move");
        //console.log("dvd!");
        //draw();
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
	requestID = window.requestAnimationFrame(move);
    }
    // function update(){
    //     // if(begin){
    //     //     console.log("already started");
    //     // } else{
    //     //     begin = true;
    //     //     console.log("starting");
    //     //     this.move();
    // 	// }
    // 	this.move();
    // }
    return {
//        draw   : draw,
        move   : move,
	image : image,
	dx : dx,
	dy: dy
//        update : update,
//        begin  : begin
    };
}

console.log("end");
