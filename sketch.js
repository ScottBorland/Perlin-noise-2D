//var xoff1 = 0;
//var xoff2 = 1000;
var inc = 0.1;
var start = 0;

var scl = 10;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];

var flowfield;

function setup() {
	background(255);
	createCanvas(200, 200);
	pixelDensity(1);
	cols = floor(width / scl);
	rows = floor(height / scl);
	fr = createP('');

	flowfield = new Array(cols * rows);

	for(var i = 0; i < 400; i++){
	particles[i] = new Particle();
	}
}

function draw() {

//background(255);
var yoff = 0;

	for(var y = 0; y < rows; y++){
		var xoff = 0;
	for(var x = 0; x < cols; x++){
			var index = x + y * cols;
			var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
			var v = p5.Vector.fromAngle(angle);
			v.setMag(1);
			flowfield[index] = v;
			xoff += inc;
			// stroke(0, 50);
			// strokeWeight(1);
			// push();
			// translate(x*scl, y*scl);
			// rotate(v.heading());
			// line(0, 0, scl, 0);
			// pop();
		}
		yoff += inc;

		zoff += 0.001;
	}

	for(var i = 0; i < particles.length; i++){
		particles[i].follow(flowfield);
		particles[i].update();
		particles[i].show();
		particles[i].edges();
	}

	fr.html(floor(frameRate()));
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
