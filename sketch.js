let noiseMax = 2;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    stroke(255);
    noFill();

    beginShape();
    for(let a = 0; a < TWO_PI; a += 0.1) {
        let xoff = map(cos(a), -1, 1, 0, noiseMax);
        let yoff = map(sin(a), -1, 1, 0, noiseMax);
        let r = map(noise(xoff, yoff), 0, 1, 100, 200);
        let x = r * cos(a);
        let y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);
    noLoop();
}
