// Ejercicio 1
const colores = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6"];
function cambiarColorFondo() {
const color = colores[Math.floor(Math.random() * colores.length)];
document.body.style.backgroundColor = color;
}

// Ejercicio 2
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(e) {
e.preventDefault();
const nombre = document.getElementById("nombre").value;
const errorDiv = document.getElementById("error");
if (nombre.trim() === "") {
    errorDiv.textContent = "Por favor, ingresa tu nombre.";
} else {
    errorDiv.textContent = "";
    alert("Formulario enviado con éxito");
}
});

// Ejercicio 3
let contador = 0;
const contadorElemento = document.getElementById("contador");

function modificarContador(valor) {
contador += valor;
contadorElemento.textContent = contador;
}

function reiniciarContador() {
contador = 0;
contadorElemento.textContent = contador;
}