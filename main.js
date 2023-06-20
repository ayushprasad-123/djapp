m1=m2="";
function preload(){
    m1=loadSound("music.mp3");
    m2=loadSound("music2.mp3");
}
function setup(){
    c=createCanvas(600,424);
    c.center();
    v=createCapture(VIDEO);
    v.hide();
}
function draw(){
    image(v,0,0,600,424);
}