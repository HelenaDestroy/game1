var vp = document.getElementById("land");
var papel = vp.getContext("2d");
var fondo = {
    url: "tile.png",
    cargaOk: false
}
fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

var vaca = {   
    url: "vaca.png",
    cargaOk: false,
} 
vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

function cargarVacas(){
    vaca.cargaOk = true;
    dibujar();
} 
function cargarFondo(){
fondo.cargaOk = true;
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
        for (var i=0; i<10; i++) 
        {
            var x = aleatorio (0, 420);
            var y = aleatorio (0, 420);
            papel.drawImage(vaca.objeto, x, y);
        }
    }
}


function aleatorio(min,maxi)
{
    var resultado;
    resultado =  Math.floor(Math.random() * (maxi - min +1)) + min;
    return resultado;}

// }
// function dibujarCerdos()
// {
//     papel.drawImage(cerdo, 10, 300);
// }
// function dibujarPollos()
// {
//     papel.drawImage(pollo, 400, 150);
// }

// var cerdo = new Image();
// cerdo.src = "cerdo.png";
// cerdo.addEventListener("load", cargarCerdos);
// var pollo = new Image();
// pollo.src = "pollo.png";
// pollo.addEventListener("load", cargarPollos);
