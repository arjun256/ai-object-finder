
status = "";

function preload(){
}

function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(400, 300);
    video.hide();
}

function start(){
    objectDetector = objectDetector('cocosssd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw(){
    image(video, 0,0, 380, 380);
}

function modelLoaded(){
    console.log("model Loaded");
    status = true;
}


