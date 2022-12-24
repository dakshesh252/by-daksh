function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(0,150);


    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet('video', modelLoaded);
    poseNet.on('pose' ,gotPoses)
}


function draw(){
    background("#62bce3");
}


function modelLoaded(){
    console.log("Posenet is initialised");
}

function gotPoses(results){
    if(results > 0 ){
        console.log(results);
    }
}