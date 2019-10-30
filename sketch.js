//var xoff1 = 0;
//var xoff2 = 1000;
var inc = 0.01;
var start = 0;

function setup() {
	createCanvas(200, 200);
	pixelDensity(1);
}

function draw() {
	var yoff = 0;

	loadPixels();
	for(var y = 0; y < height; y++){
		var xoff = 0;
	for(var x = 0; x < width; x++){
			var index = (x + y * width) * 4;
			var r = noise(xoff, yoff) * 255;
			pixels[index + 0] = r;
			pixels[index + 1] = r;
			pixels[index + 2] = r;
			pixels[index + 3] = 255;

			xoff += inc;
		}
		yoff += inc;
	}
	updatePixels();
}
/* cool static effect
for(var x = 0; x < width; x++){
	for(var y = 0; y < height; y++){
		var index = (x + y * width) * 4;
		var r = random(255);
		pixels[index + 0] = r;
		pixels[index + 1] = r;
		pixels[index + 2] = r;
		pixels[index + 3] = 255;
	}
}*/
