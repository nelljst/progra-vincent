 

function setup() {
  createCanvas(windowWidth,windowHeight);

 
}
//if = pose une question, condition ( réponse oui), else répond a la question
//let=variable(petite boite dans la memoire)
//% est modulo = reste de la division entière
//transform=place au milieu de l'écran (plus facile pour calculé)
//mouseXetY = place le milieu sur la souris
//random=comme lancer un d
//place aléatoirement l'étoile de manière fixe

function draw() {
  background(13,5,45);
  stroke(255,255,255);
  let counter=0;
while (counter<100){
  mouliStar (
    noise(1, millis()*0.001,counter*0.01)*width,
    noise(2, millis()*0.002,counter*0.01)*height,
    25,25);
    

  counter++;

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
}


  




