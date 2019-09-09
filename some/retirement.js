const calcularEdad = fechaNacimiento => {
  return new Date().getFullYear() - fechaNacimiento;
};

const jubilacion = (fechaNacimiento, nombre) => {
  let edad = calcularEdad(fechaNacimiento);
  return `A ${nombre} le faltan ${65 - edad} años para su retiro.`;
};

console.log("Edad : " + calcularEdad(1995));
console.log(jubilacion(1995, "Ignacio"));

function ejemplo1() {}

const ejemplo2 = function() {};

const ejemplo3 = () => {};
