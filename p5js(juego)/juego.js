class circulo {//Creacion de clase.
  constructor(px,py,alto){// Generacion de constructor.
    this.fillred=900;
    this.fillgreen= 300;
    this.fillblue=100;
    this.px=px;
    this.py=py;
    this.alto=alto;
  }
  display(){ //Generacion de metodos.
   
   ellipse(this.px,this.py,this.alto); //El metodo generara un elipse con los siguientes atributos.
  }
  }
  class jugador2  { // Nueva clase.
    constructor(x, y, alto, ancho, vx, vy) { //Contructor de la clase.
     this.posicion = createVector(x,y);
     this.alto = alto;
     this.ancho = ancho;
     this.fillred = 255;
     this.fillgreen = 87;
     this.fillblue = 57;
     this.velocidad = createVector(vx,vy);
   }
   spawn()//Metodos de la clase , este metodo sera para determinar la velocidad de los enemigos.
   {
     { if (this.posicion.x + this.ancho >= 800 )
           this.velocidad.x = -1;
           this.velocidad.y =+3;
         }
       this.posicion.add(this.velocidad);
   }
   draw()// Este metodo sera para desplegar la figura que sera el proyectil.
  {
fill(this.fillred,this.fillgreen,this.fillblue);
ellipse(this.posicion.x,this.posicion.y,this.alto,this.ancho);
  }
 }
 
var proyectiles = [];// Creacion de arreglo sera para deslpegar los enemigos.
var dibujando = '0' // Creacion de variable constante este sera para que generar los enemigos.
function mouseClicked() {// Creacion de la funcion para reaparecer los enemigos.
  if (mouseY >1)
    { 
  if (dibujando=="0" )
  proyectiles.push(new jugador2 (mouseX,mouseY,random(40),40,random(-7+10))); // Genera un nuevo objeto de tipo jugador 2.
  //return false;
}}
 class jugador1 extends circulo{ // Nueva clase que heredea de la clase circulo.
   constructor(px,py,alto){ //Contructor de la clase heredada.
     super(px, py, alto)//Contructor de la nueva clase.
   }
   spawn()//Metodos de la clase , este metodo sera para determinar la velocidad de los enemigos.
   {
     { if (this.posicion.x + this.ancho == we )
           this.velocidad.x = -1;
           this.velocidad.y =+3;
         }
       this.posicion.add(this.velocidad);
   }
   display(){ //  Este metodo sera para desplegar el jugador que esquivara los proyectiles.
    fill(this.fillred,this.fillgreen,this.fillblue);// Relleno de la figura.
     ellipse(this.px,this.py,this.alto);// Los atributos de la figura.
   }
   move() { // Generacion de metodo (Esta servira para mover al jugadro que esquivara los proyectiles con las flechas del teclado)
    if (keyIsDown(LEFT_ARROW)) { // Se movera - 10 posiciones del canvas hacia la izquierda.
      this.px -= 4;
    }
    if (keyIsDown(RIGHT_ARROW)) {// Se movera +10 posiciones del canvas hacia la derecha.
      this.px += 4;
    }
    if (keyIsDown(UP_ARROW)) {// Se movera -10 posiciones del canvas hacia arriba.
      this.py -= 4;
    }
    if (keyIsDown(DOWN_ARROW)) {// Se movera +1 posiciones del canvas hacia abajo.
      this.py += 4;
    }
  }
    }
 let j1;// Nueva variable , esta servira para crear un objeto de tipo jugador 1.
 //let. j2;
 function setup() {
   createCanvas(600, 800);// Generacion de el campo de juego.
  noStroke();// Elimina bordes
    j1 = new jugador1 (250,350,20,10);// Creacion de nuevo objeto de tipo jugador1.
   // j2 = new jugador2 (250,350,20,10);
 }


 function draw() {
  background(50,100,200);// Color del fondo
  
  proyectiles.forEach((fig) => // El arreglo devuelve los metodods de tipo jugador 2.
   {
    fig.draw();
    fig.spawn();
   });
   
  //drawAxis();// metodo para mostrar las coordenadas del canvas, descargada de la pagina de npm.
 
  j1.display();// Despliega el metodo de j1.
  j1.move();// Despliega el metodod de j1.
   
     
   }