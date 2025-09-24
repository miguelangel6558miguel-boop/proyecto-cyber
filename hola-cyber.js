console.log("¡Hola! Este es mi primer tool de ciberseguridad. Scan activado sin errores.");
console.log("¡Scan cyber exitoso!");  // La línea que agregamos antes

// Función simple para unit test (simula un "scan" cyber)
function scanSeguro(texto) {
  return texto + " es seguro, sin virus.";
}

// Llama la función (para integration)
console.log(scanSeguro("Mi app"));
