// Obtiene una referencia al elemento <canvas> en el documento HTML
var canvas = document.getElementById("canvas");

// Obtiene el contexto de renderizado 2D del canvas, que permite dibujar gráficos
var ctx = canvas.getContext("2d");

// Establece el color de relleno para las figuras que se dibujen a partir de ahora
ctx.fillStyle = "rgb(9, 218, 187)";

// Dibuja un rectángulo relleno con las siguientes propiedades:
// - (15, 15): Coordenadas de la esquina superior izquierda (X=15, Y=15)
// - 350: Ancho del rectángulo en píxeles
// - 200: Altura del rectángulo en píxeles
ctx.fillRect(15, 15, 300, 300);
