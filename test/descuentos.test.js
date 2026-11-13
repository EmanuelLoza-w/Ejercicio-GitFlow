
const assert = require("assert");
const { calcularPrecioFinal } = require("../src/descuentos");

// Cliente normal
assert.strictEqual(calcularPrecioFinal(10000, "normal"), 10000);

// Estudiante
assert.strictEqual(calcularPrecioFinal(10000, "estudiante"), 8500);

// Precio cero
assert.strictEqual(calcularPrecioFinal(0, "estudiante"), 0);

console.log("Todos los tests ejecutados correctamente");