function setup() {
    createCanvas(800,600);
    frameRate(12);
    background(40);
}

function draw() {
  stroke(lerpColor(color('#ea33ee'), color('#998899'), frameCount/120));

    translate(width/2,height/2)

    if(frameCount<=240){
    
        var rot = PI/120;
      
        var x = Math.cos(frameCount*rot);
        var y = Math.sin(frameCount*rot);
    
        rect(200,0,x*200,y*200)
    }
}