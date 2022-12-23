function setup() {
  // put setup code here
  createCanvas (windowWidth, windowHeight);
  rectMode(CENTER);

}

function draw() {
  // put drawing code here
  background(0,0,0);
 
 //soleil
  //déplacé le point de reférence pour la hauteur et la largeur pour le mettre n'importe ou
  translate (width/2,height/2); //ici le coin gauche supérieur est placé au milieu de mon Canvas
  //rotation du rect ( un tour complet = 2PI (6,28)
  //millis =  animation rotation (6,28 millisec); divis / par x sec pour ralentir
  //push et pop retiennent la position d repère du triangle
  //push ();
  push();
 rotate (millis()/10000);
 //place le point de reférence au milieu du rect
  fill (255,250,0); // principe RVB 
   rect (0,0,100,100);
   pop()
    //pop fait tourner les prochains éléments indépendament du premier rect
//pop ();

// mercure
push();
rotate (millis()/1000);
translate(-100,100);
rotate (millis()/700);
fill (103,113,121);
rect(0,0,25,25);
pop ();

//venus
push ();

rotate (millis()/1200);
translate (-90,-200);
rotate(millis()/700);
fill (240,195,0);
rect(0,0,40,40);
pop ();

//terre
push();
rotate(millis()/1000);
translate (20,-200);
rotate (millis()/700);
fill (0,127,255);
rect(0,0,30,30);
fill(206,206,206);
circle(50,-50,15,15,10);
pop();

//mars
push();
rotate(millis()/1000);
translate (300,60);
rotate ( millis()/1000);
fill(187,11,11);
rect (0,0,30,30);
pop();


//jupiter
push();
rotate(millis()/1200);
translate (0,350);
rotate ( millis()/1000);
fill(253,70,38);
rect(0,0,70,70);
pop();

//elispe saturne


//saturne
push();
rotate(millis()/1500)
translate(-350,-260);
rotate(millis()/1000);
fill(212, 115, 212);
rect(0,0,52,52);
pop();

//uranus
push();
rotate(millis()/1000);
translate(360,-260);
rotate(millis()/600);
fill(38, 196, 236);
rect(0,0,12,12);
pop();
  
//neptune
push();
rotate(millis()/700);
translate(-430,300);
rotate(millis()/1000);
fill(44, 117, 255);
rect(0,0,10,10);






}