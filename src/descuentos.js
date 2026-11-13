
function calcularPrecioFinal(precio, tipoCliente) {
    if (precio < 0) {
        throw new Error("El precio no puede ser negativo");
    }

    let descuento = 0;
    
    if (tipoCliente === "estudiante") {
        descuento = 0.15;
    }

    return precio - (precio * descuento);
}

module.exports = { calcularPrecioFinal };