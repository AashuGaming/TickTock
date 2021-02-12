var line1, line2, line3, lin4, line5, line6, line7, line8;

function setup() {
  createCanvas(1000,600);
  
  line1 = createSprite(200, 200, 12, 92);
  line1.shapeColor = "blue";

  line2 = createSprite(249, 150, 110, 12);
  line2.shapeColor = "blue";

  line3 = createSprite(300, 194, 12, 105);
  line3.shapeColor = "blue";

  line4 = createSprite(250, 240, 100, 12);
  line4.shapeColor = "blue";

  line5 = createSprite(250, 200, 10, 10);
  line5.shapeColor = "yellow";

  line6 = createSprite(250, 185, 5, 45);
  line6.shapeColor = "blue";
  
  line7 = createSprite(270, 200, 45, 5);
  line7.shapeColor = "green";

  line8 = createSprite(250, 210, 5, 35);
  line8.shapeColor = "red";
}

function draw() {
  background("black");  
  drawSprites();
}