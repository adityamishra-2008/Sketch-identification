function preload(){
    classifier=ml5.imageClassifier("DoodleNet");

}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
background("white");
canvas.mouseReleased(classifycanvas);
synth=window.speechSynthesis;

}
function clear_canvas(){
    background("white");

}
function classifycanvas(){
classifier.classify(canvas,gotresult);

}

function draw(){
strokeWeight(5);
stroke("red");
if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
}
}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("label").innerHTML="Label: "+results[0].label;
        document.getElementById("confidence").innerHTML="Confidence: "+Math.round(results[0].confidence*100)+"%";
        utterthis=new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterthis);
    }
}
    
