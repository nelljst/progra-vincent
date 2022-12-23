function setup() {
  //faire le canvas la taille de la page
  createCanvas(windowWidth, windowHeight);
  background(0);
  
}

function draw() {
  
  background(0,255,255);
  //width et height = permet d'avoir le calque qui se place a la même distance de gauche et droit
  rect(100, 100, width-2*100,height-2*100)
 
  textAlign(CENTER,CENTER);
  fill(0,255,0)            //centrer le mot
  textSize (40);
  text("J'AIME LA RACLETTE et les gros pilons",width/2,height/2);
  
  fill(0);
}

function windowResize(){
  //calque par dessus le fond
  
  resizeCanvas(windowWidth, windowHeight);
}