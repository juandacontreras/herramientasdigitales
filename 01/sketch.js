var videocamara;
function setup() {
  createCanvas(900, 500);
  videocamara = createCapture(VIDEO);
  
  //Línea para ocultar el video original
  videocamara.hide();
  noStroke();
}
function draw() {
  
 
  
//VIDEO MANGENTA  
    
  
  //Color azul cambiante = sombras
  background(249,0,83);
  //color blanco = luces
  fill(255);
  
  //Distorsión del video
  videocamara.loadPixels();
  for (var cy = 0; cy < videocamara.height; cy += 10) {
    for (var cx = 0; cx < videocamara.width; cx += 10) {
      var offset = ((cy*videocamara.width)+cx)*4;
      var xpos = (cx / videocamara.width) * width;
      var ypos = (cy / videocamara.height) * height;
      rect(xpos, ypos, 10,
        10 * (videocamara.pixels[offset+1]/100));
    }
  }
  
  
  
  
  
  
  
  

  //VIDEO AMARILLO  
    
  
  //Color azul cambiante = sombras
  background(255,239,3,(mouseY-200));
  //color blanco = luces
  fill(255);
  
  //Distorsión del video
  videocamara.loadPixels();
  for (var cy = 0; cy < videocamara.height; cy += 30) {
    for (var cx = 0; cx < videocamara.width; cx += 10) {
      var offset = ((cy*videocamara.width)+cx)*4;
      var xpos = (cx / videocamara.width) * width;
      var ypos = (cy / videocamara.height) * height;
      rect(xpos+3, ypos+3, 10,
        10 * (videocamara.pixels[offset+1]/150));
  
    }
  }
  
//VIDEO CYAN  
    
  
  //Color azul cambiante = sombras
  background(0,190,223,(mouseX-200));
  //color blanco = luces
  fill(255);
  //Distorsión del video
  videocamara.loadPixels();
  for (var cy = 0; cy < videocamara.height; cy += 5) {
    for (var cx = 0; cx < videocamara.width; cx += 5) {
      var offset = ((cy*videocamara.width)+cx)*4;
      var xpos = (cx / videocamara.width) * width;
      var ypos = (cy / videocamara.height) * height;
      rect(xpos-5, ypos-5, 10,
        10 * (videocamara.pixels[offset+1]/150));
  
    }
  }
  
  
  //Marco del Título
  fill (0);
  rect (0,60,400,40)
  
  //Marco del subtítulo
   fill (0);
  rect (0,95,350,30)
  
  
  //Título
  textSize(40); 
  textSize(40); 
  fill(247, 0, 90);
  textFont("Bree Serif");
text('Visiones Humanas', 30, 95);
  
  
  //Subtítulo
   textSize(15); 
  fill(255);
  textFont("Quicksand");
text('Distorsiones propias en el mundo digital', 30, 115);

        } 
