var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var numRect = 15;
var interval = 150 / numRect;
for (var i=0; i<numRect; ++i)
{
	if (i % 2 == 0)
		ctx.fillStyle = "rgb(0, 100, 100)";
	else
		ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fillRect(0 + i*interval, 0 + i*interval, 300 - i*2*interval, 300 - i*2*interval);
}