// Arrow function con parámetro REST e iterador moderno (reduce)
export const promedio = (...notas) =>
  notas.reduce((suma, nota) => suma + nota, 0) / notas.length;

// Parámetro por defecto
export const estado = (nota, minima = 13) =>
  nota >= minima ? "Aprobado" : "Desaprobado";

// Desestructuración directa en los parámetros y Template Literal
export const reporte = ({ nombre, notas }) => {
  // Operador SPREAD para enviar el contenido del array como argumentos individuales
  const prom = promedio(...notas);
  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};
