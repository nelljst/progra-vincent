function setup() {
  // put setup code here
 //alert("HAAAAAA");
  createCanvas(1000,1000);

  background(0);
  //rect(position horizontal, position verticale,largeur,hauteur)
  //yeux
  rect(120, 150, 50, 80);
  
  fill(0);
  rect(140,200,15,15);
  
  fill(255);
     rect(230,150,50,80);

  fill(0);
     rect(250,200,15,15);
//nez
     fill(255);
     circle(185,320,25,25,15);
     circle(215,320,25,25,15);
     circle(200,320,30,30,20);
     triangle(200,300,190,220,210,220);
//bouche
     rect(100,400,220,70);
//sourcils
     quad(60,60,85,40,200,100,85,50);
     quad(210,110,340,40,370,85,340,60);
//menton
     quad(100,570,200,580,300,570,200,600);

     stroke(0);
     line(60,430,360,430);
    
     line(60,180,360,180);

//dessin 2 bonhomme
     circle(600,200,40,40,30);
     rect(570,220,60,90);
//jambes et pieds
     rect(570,310,30,100);
     rect(600,310,30,100);
     rect(570,420,30,30);
     rect(600,420,30,30);
//bras et main
     rect(550,220,20,90);
     rect(630,220,20,90);
     rect(550,310,20,20);
     rect(630,310,20,20);

//dessin 3 chien
     rect(210,850,20,60);
     rect(260,850,20,60);
     rect(200,800,90,50);
     rect(200,850,20,70);
     rect(270,850,20,70);
     circle(245,780,50,50,40);
     triangle(220,770,230,740,235,770);
     triangle(255,770,260,740,270,770);
     
fill(0);
     circle(230,780,10,10,5);
     circle(260,780,10,10,5);
     circle( )





       



}


function draw() {
  // put drawing code here
}