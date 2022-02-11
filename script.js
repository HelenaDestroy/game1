var vp = document.getElementById("land");
var papel = vp.getContext("2d");
var fondo = {
    url: "tile.png",
    cargaOk: false
}
fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);


var cerdo = {
    url: "cerdo.png",
    cargaOk: false
}
cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdos);

var pollo = {
    url: "pollo.png",
    cargaOk: false
}
pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollos);


var vaca = {   
    url: "vaca.png",
    cargaOk: false,
} 
vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
    } 
function cargarVacas(){
    vaca.cargaOk = true;
    dibujar();
} 
function cargarCerdos(){
    cerdo.cargaOk = true;
    dibujar();
} 
function cargarPollos(){
    pollo.cargaOk = true;
    dibujar();
} 

function dibujar()
{
    if (fondo.cargaOk)
    {
        papel.drawImage (fondo.objeto, 0, 0);
    }
    if (vaca.cargaOk)
    { 
      var cantidad = aleatorio(5, 10);
      for (var i=0; i<cantidad; i++) 
        {
            var x = aleatorio (0, 420);
            var y = aleatorio (0, 420);
            papel.drawImage (vaca.objeto, x, y);
        }
    }
    if (cerdo.cargaOk)
        {  
            papel.drawImage(cerdo.objeto, 30, 30);
        }
    if (pollo.cargaOk)
    {   var cantidad = aleatorio(5, 10);
        for (var i=0; i<cantidad; i++) 
        {
        var x = aleatorio (0, 420);
        var y = aleatorio (0, 420);
        papel.drawImage(pollo.objeto, x, y);
        }
    }
}



function aleatorio(min,maxi)
{
    var resultado;
    resultado =  Math.floor(Math.random() * (maxi - min +1)) + min;
    return resultado;}
