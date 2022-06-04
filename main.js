function preload() {
    img = loadImage('go.png');
}

function setup(){
    createCanvas(500,800);
}


function draw() {
    image(img,120, 400, 300, 160);

   
    fill("red")
    rect(430, 330, 35, 290);
    rect(60, 330, 35, 290);
    rect(60, 330, 360, 35);
    rect(60, 640, 360, 35);
     fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(450, 350, 70);
    circle(450, 650, 70);
    circle(80, 650, 70);
    circle(80, 350, 70);
}

function Snapshot(){
    save('go.png');
}