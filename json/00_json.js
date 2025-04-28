// Seleccionamos elementos
const titulo = document.getElementById("titulo");
const btnCrear = document.getElementById("btnCrear");
const btnEliminar = document.getElementById("btnEliminar");
const contenedor = document.getElementById("contenedor");

// Cambiamos el texto del título
titulo.textContent = "Ejemplo dinámico con DOM";

// Evento: Crear un nuevo párrafo al hacer clic en btnCrear
btnCrear.addEventListener("click", () => {
// Creamos un <p> nuevo
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Soy un párrafo creado al hacer clic.";
// Le añadimos una clase CSS
nuevoParrafo.classList.add("resaltado");
// Lo insertamos en el contenedor
contenedor.appendChild(nuevoParrafo);
});

// Evento: Eliminar el último párrafo al hacer clic en btnEliminar
btnEliminar.addEventListener("click", () => {
// Obtenemos todos los párrafos dentro de #contenedor
const parrafos = contenedor.getElementsByTagName("p");
if (parrafos.length > 0) {
    // Seleccionamos el último párrafo
    const ultimoParrafo = parrafos[parrafos.length - 1];
    // Lo eliminamos del DOM
    // contenedor.removeChild(ultimoParrafo);
    ultimoParrafo.remove();
} else {
    alert("No hay más párrafos para eliminar.");
}
});