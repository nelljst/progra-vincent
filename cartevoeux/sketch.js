let kwismas ;
let img;
let content="IT'S CHRISTMAS TIME";
let yStart = 0; 
const FLOCONS_COUNT= 200;
const MAXSIZE = 15;
const COUCHES_COUNT = 5;

const FLOCONS = [];

function preload(){
  img = loadImage("images/santalol.png");

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  image(img,400,400);

  kwismas = circularGradiant(width,height,198, 8, 0,255, 255,255);
  noStroke();

 for (let c = 0; c < COUCHES_COUNT; c++){
  FLOCONS.push([]);
 
  for(let i = 0; i < FLOCONS_COUNT;i++){
    FLOCONS[c].push ({
      x: random (width),
      y: random (height),
      mass: random (0.75, 1.25),
      c: c + 1
    } );
    }                              //(new Flake()); //new = invoque le constructor
  }        
}
 
  


function draw() {
  background(13,5,45);
 
  image (kwismas,0,0,width,height);

for(let y = yStart; y< height; y += 28){
  textSize(30);
  textStyle(BOLDITALIC);
  textAlign(CENTER,CENTER);
  fill(34, 120, 15);
  text(content,width/2, y);

}
  yStart--;
  
 

  stroke(255,255,255);
let counter=0;
while (counter<100){
mouliStar (
  noise(1,counter)*width,
  noise(2,counter)*height,
  5,5);
  

counter++;

    }
    fill(255,255,255);
    for(let c = 0; c <FLOCONS.length ; c++){
      const COUCHES = FLOCONS[c] ;
  
      for ( let i = 0; i< COUCHES.length;i++){
        const flocons = COUCHES[i];    
        circle(flocons.x, flocons.y, (flocons.c * MAXSIZE) / COUCHES_COUNT);
        updateFlocons(flocons);
      }
    }
  }

function updateFlocons(flocons) {
  const diameter = (flocons.c * MAXSIZE) / COUCHES_COUNT;
  if (flocons.y > height + diameter) flocons.y = -diameter;
  else flocons.y += 1 * flocons.c * flocons.mass;
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