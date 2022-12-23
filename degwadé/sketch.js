let degwade;

function setup() {
  //for=fonction condition //xhile
  createCanvas(windowWidth,windowHeight);
  degwade = linearGradiant(width,height,15,5,107,223,115,255);
  //gradiant=cercle
  
 
}

function draw(){

background(84,249,141);
image (degwade,0,0,width,height);
stroke(random(255),random(255),random(255));
  let counter=0;
  while (counter<500)
  {
  mouliStar (
    noise(2,counter)*width,
    noise(4,counter)*height,
  2,2);
  
counter++;
  
 }


}

function mouliStar (x,y,w,h){
  push ();
  translate(x,y);
  if(frameCount%5==0){
    line (-w/2,0,w/2,0);
  }else{
    line(0,-h/2,0,h/2);
  }
  pop ();
  
  }
  

function linearGradiant(w,h,r1,v1,b1,r2,v2,b2){

  let graphic = createGraphics(w, h);
  for(let compteur = 0 ;compteur < h ;compteur++ ){
    let red = map (compteur, 0,h,r1,r2);
    let green = map (compteur,0,h,v1,v2);
    let blue= map (compteur, 0,h,b1,b2);
    
    graphic.stroke(red,green,blue);
    graphic.line (0,compteur,w,compteur);
  
  }
return graphic;
}




//function circularGradiant(w,h,r1,v1,b1,r2,v2,b2){
//h=h*2;
  //let graphic = createGraphics(w, h);
  //graphic.translate(graphic.width/2,graphic.height/2);
  //for(let compteur = 0 ;compteur < h ;compteur++ ){
    //let red = map (compteur, 0,h,r1,r2);
    //let green = map (compteur,0,h,v1,v2);
    //let blue= map (compteur, 0,h,b1,b2);
    
    //graphic.fill(red,green,blue);
    //graphic.noStroke();
    //graphic.rotate(0.1);
   
    //graphic.ellipse (0,0,h-compteur,h-compteur);
  
 // }
//return graphic;



//}






//etoile


  


