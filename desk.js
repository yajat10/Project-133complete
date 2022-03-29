find_status="";
object=""
function setup(){
    canvas=createCanvas(700,500)
    canvas.center()
    object_Detection=ml5.objectDetector("cocossd",modelLoaded)
}
function modelLoaded(){
    console.log("model is loaded!");
    find_status=true;
    object_Detection.detect(img,gotresult)
}
function preload(){
img=loadImage("Desk.jpg")
}
function gotresult(error,result){
if(error){
    console.log(error);
}
console.log(result);
object=result
}
function draw(){
    image(img,0,0,700,500)
    if(find_status!=""){
        for(i=0;i<object.length;i++){
            document.getElementById("status").innerHTML="Status:  Detected Object(s)"
            fill("red")
            percent=floor(object[i].confidence*100)
            text(object[i].label+" "+percent+"%",object[i].x,object[i].y)
            textSize(22)
            noFill()
            stroke("red")
            rect(object[i].x,object[i].y,object[i].width,object[i].height)
        }
    }
}