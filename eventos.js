document.addEventListener("keydown", dibujarTeclado);
var d = document.getElementById("lienzoBosque");
var lienzo = d.getContext("2d");

document.addEventListener("mousedown", pulsarMouse);
document.addEventListener("mousemove", moverMouse);
document.addEventListener("mouseup", soltarMouse);

document.addEventListener("touchstart", pulsarTouch);
document.addEventListener("touchmove", moverTouch);
document.addEventListener("touchend", soltarTouch);

var colorElegido = document.getElementById("colorPincel");

// Teclas de las flechas
var teclas = 
{
    UP: 38,
    LEFT: 37,
    DOWN: 40,
    RIGHT: 39
};

// Variables para dibujar
var x = 150;
var y = 150;
var color = colorElegido.value;



//

var activo = false;

function pulsarTouch(evento)
{
    var touch = evento.targetTouches[0];

    x = touch.clientX-10;
    y = touch.clientY-15;
    activo = true;
}

function moverTouch(evento)
{
    var touch = evento.targetTouches[0];
    if (activo)
    {
        dibujarLinea("black", x, y, touch.clientX-5, touch.clientY-15);
        x = touch.clientX-10;
        y = touch.clientY-15;
    }
}

function soltarTouch()
{
    activo = false;
}

// Función para dibujar con el mouse
function pulsarMouse(evento)
{
    
    color = colorElegido.value;
    console.log(color);
    activo = true;
    x = evento.offsetX;
    y = evento.offsetY;
}

function moverMouse(evento)
{
    if (activo)
    {
        
        dibujarLinea(color, x, y,evento.offsetX+5, evento.offsetY);
        x = evento.offsetX;
        y = evento.offsetY;
    }
}

function soltarMouse()
{
    activo = false;
}


// Función para dibujar con las flechas del teclado
function dibujarTeclado(evento)
{
    tamañoLinea = 10;
    
    console.log("Tecla oprimida " + evento.keyCode);

    if (evento.keyCode == teclas.UP)
    {
        dibujarLinea(color, x, y, x, y - tamañoLinea);
        y = y - tamañoLinea;
    }
    if (evento.keyCode == teclas.DOWN)
    {
        dibujarLinea(color, x, y, x, y + tamañoLinea);
        y = y + tamañoLinea;
    }
    if (evento.keyCode == teclas.RIGHT)
    {
        dibujarLinea(color, x, y, x + tamañoLinea, y);
        x = x + tamañoLinea;
    }
    if (evento.keyCode == teclas.LEFT)
    {
        dibujarLinea(color, x, y, x - tamañoLinea, y);
        x = x - tamañoLinea;
    }

}

// Función para dibujar la línea 
function dibujarLinea(color, xInicio, yInicio, xFin, yFin)
{
    grosor = 3

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosor;
    lienzo.lineHeight = grosor;
    lienzo.moveTo(xInicio, yInicio);
    lienzo.lineTo(xFin, yFin);
    lienzo.stroke();
    lienzo.closePath();
}