const calcularEdad = fechaNacimiento => {
  return new Date().getFullYear() - fechaNacimiento;
};

const jubilacion = (fechaNacimiento, nombre) => {
  let edad = calcularEdad(fechaNacimiento);
  return `A ${nombre} le faltan ${65 - edad} años para su retiro.`;
};

// console.log("Edad : " + calcularEdad(1995));
// console.log(jubilacion(1995, "Ignacio"));

// function ejemplo1() {}

// const ejemplo2 = function() {};

// const ejemplo3 = () => {};

var currentAge = 23;

function retirement(retirementYear, name) {
  var endRetirenment = retirementYear - currentAge;
  return "A " + name + " le faltan " + endRetirenment + " años para su retiro";
}

console.log(retirement(65, "Miriam"));
