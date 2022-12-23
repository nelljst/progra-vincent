let kwismas ;
let img;



function preload() {
  img = loadImage ("images/santa.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  kwismas = circularGradiant(width,height,198, 8, 0,255, 255,255);
  
}

function draw() {
  background(13,5,45);
  image(img,0,0,400,200);
 
  image (kwismas,0,0,width,height);
  textSize(30);
  textStyle(BOLDITALIC);
  textAlign(CENTER,CENTER);
  text("IT'S FUCKING CHRISTMAS",width/2,height/2);
  fill(34, 120, 15);
 
  stroke(255,255,255);
let counter=0;
while (counter<100){
mouliStar (
  noise(1,counter)*width,
  noise(2,counter)*height,
  5,5);
  

counter++;

    }
}


function mouliStar (x,y,w,h){
push ();
translate(x,y);
if(frameCount%7==0){
  line (-w/2,0,w/2,0);
}else{
  line(0,-h/2,0,h/2);
}
pop ();

}


 function circularGradiant(w,h,r1,v1,b1,r2,v2,b2){
    h=h*10;
    
      let graphic = createGraphics(w, h);
      graphic.translate(graphic.width/2,graphic.height/2);
      for(let compteur = 0 ;compteur < h ;compteur++ ){
        let red = map (compteur, 0,h,r1,r2);
        let green = map (compteur,0,h,v1,v2);
        let blue= map (compteur, 0,h,b1,b2);
        
        graphic.fill(red,green,blue);
        graphic.noStroke();
        graphic.rotate(0.1);
       
        graphic.ellipse (0,0,h-compteur,h-compteur);
      
     }
    return graphic;
    
    
    
    }