let img;
let imagen2;
let poco = 1;
let mucho = 10;

function preload(){
  img = loadImage("imagenes/apocalipsis.jpg");
  imagen2 = loadImage("imagenes/mascara_de_gas.png");
}

function setup() {
  createCanvas(600, 550);
}

function draw() {
  let lineas = map(mouseX, height, width, poco, mucho);
  push();
  for(let i= 0; i <=100; i++){
  let x = random(img.width);
  let y = random(img.height)
  let angulo = random(-10, 10);
  let roto = img.get(x,y);
  strokeWeight(lineas);
  stroke(roto);
  line(x, y, x, y + angulo);
  }
  pop()
  
  image(imagen2, 250, 300, 300, 250)
  tint("#B7F7FA7C");
}