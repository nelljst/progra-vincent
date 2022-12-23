
  //tableau pour faire autant de flocon possible

const FLOCONS_COUNT= 200;
const MAXSIZE = 15;
const COUCHES_COUNT = 5;

const FLOCONS = [];


function setup() {
  createCanvas(windowWidth,windowHeight);
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
   background (223, 115, 255);
    
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

    

   

   
  

//flocons[cmpt].display();      
  


//class Flake {
  //constructor(){
   // this.posX = random(width);
    //this.posY = random(height);
  //}
//display() {
  
 // fill(255);
 // noStroke();
 // ellipse(this.posX,this.posY,15,15);
  //this.posY = this.posY + 0.5;
//}


//}