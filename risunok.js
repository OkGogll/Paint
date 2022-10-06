var circles = [];
circles[0] = document.getElementById("red");
circles[1] = document.getElementById("blue");
circles[2] = document.getElementById("green");
circles[3] = document.getElementById("yellow");
circles[4] = document.getElementById("cyan");
circles[5] = document.getElementById("magenta");
circles[6] = document.getElementById("black");
circles[7] = document.getElementById("grey");
circles[8] = document.getElementById("orange");
circles[9] = document.getElementById("pink");

var list = document.getElementById("list");
list.addEventListener("click", pick);

var target = "#F00";
circles[0].style.height = "80px";
circles[0].style.width = "80px";

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawOnCanvas);

function pick(e) {
	console.log(e.target.tagName);
	if (e.target.tagName == "LI") {
		if (e.target.id == "red") {
			target = "#F00";
		}
		else if (e.target.id == "blue") {
			target = "#00F";
		}
		else if (e.target.id == "green") {
			target = "#0F0";
		}
		else if (e.target.id == "yellow") {
			target = "#FF0";
		}
		else if (e.target.id == "cyan") {
			target = "#0FF";
		}
		else if (e.target.id == "magenta") {
			target = "#F0F";
		}
		else if (e.target.id == "black") {
			target = "#000";
		}
		else if (e.target.id == "grey") {
			target = "#808080";
		}
		else if (e.target.id == "orange") {
			target = "#FFA500";
		}
		else if (e.target.id == "pink") {
			target = "#FFC0CB";
		}
		for (var i = 0; i <= 9; i++) {
			circles[i].style.height = "50px";
			circles[i].style.width = "50px";
		}
		e.target.style.height = "80px";
		e.target.style.width = "80px";
	}
}

function drawOnCanvas(e) {
	if (e.which == 1) {
		context.fillStyle = target;
		context.beginPath();
		context.arc(e.offsetX, e.offsetY, 20, 0, Math.PI*2);
		context.fill();
	}
}