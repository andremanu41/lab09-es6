import estudiantes, { curso } from "./datos.js";
import { reporte } from "./calculos.js";

// Spread de objetos para clonar (reemplaza a Object.assign)
const nuevo = { ...estudiantes[0], nombre: "Ana María" };

// Spread de arreglos para concatenar (reemplaza a .concat)
const todos = [...estudiantes, nuevo];

// Inyección opcional en el HTML del DOM si el elemento existe
const wrapper = document.getElementById("reportes");
if (wrapper) {
  const titulo = document.createElement("h3");
  titulo.textContent = `Curso: ${curso}`;
  wrapper.before(titulo);

  todos.forEach((estudiante) => {
    const li = document.createElement("li");
    li.textContent = reporte(estudiante);
    wrapper.appendChild(li);
  });
}

// Salida exacta requerida en consola
console.log(`Curso: ${curso}`);
todos.forEach((estudiante) => console.log(reporte(estudiante)));
