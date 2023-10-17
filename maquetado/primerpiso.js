 // Función para alternar el estado entre "Ocupado" y "Libre"
 function alternarEstadoLaboratorio(elemento) {
    var estados = ["Ocupado", "Libre"];
    var indice = 0;
    
    setInterval(function () {
        elemento.textContent = estados[indice];
        indice = (indice + 1) % estados.length;
    }, 2500); // Cambia cada 10 segundos (10000 ms)
}

// Obtener el elemento de estado y aplicar la alternancia
var estadoLaboratorio1 = document.getElementById("estadoLaboratorio1");
alternarEstadoLaboratorio(estadoLaboratorio1);
// Repite esto para los otros laboratorios si es necesario
var estadoLaboratorio2 = document.getElementById("estadoLaboratorio2");
        alternarEstadoLaboratorio(estadoLaboratorio, "Laboratorio ");

var estadoLaboratorio3 = document.getElementById("estadoLaboratorio3");
alternarEstadoLaboratorio(estadoLaboratorio3, "Laboratorio 3");

var estadoLaboratorio1 = document.getElementById("estadoLaboratorio4");
alternarEstadoLaboratorio(estadoLaboratorio4);

// Repite esto para los otros laboratorios si es necesario
var estadoLaboratorio2 = document.getElementById("estadoLaboratorio5");
        alternarEstadoLaboratorio(estadoLaboratorio5, "Laboratorio 5");

var estadoLaboratorio3 = document.getElementById("estadoLaboratorio6");
alternarEstadoLaboratorio(estadoLaboratorio6, "Laboratorio 6");
var estadoLaboratorio1 = document.getElementById("estadoLaboratorio7");
alternarEstadoLaboratorio(estadoLaboratorio7);
// Repite esto para los otros laboratorios si es necesario
var estadoLaboratorio2 = document.getElementById("estadoLaboratorio8");
alternarEstadoLaboratorio(estadoLaboratorio8, "Laboratorio 8");

// var estadoLaboratorio3 = document.getElementById("estadoLaboratorio8");
// alternarEstadoLaboratorio(estadoLaboratorio8, "Laboratorio 8");