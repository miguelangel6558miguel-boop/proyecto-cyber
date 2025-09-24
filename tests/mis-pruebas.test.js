const { test, expect } = require('@jest/globals');  // ¡NUEVO! Esto hace que test y expect funcionen
const { scanSeguro } = require('../hola-cyber.js');  // El import anterior

// Unit test: Prueba la función sola
test('scanSeguro agrega "es seguro" correctamente', () => {
  const resultado = scanSeguro('Prueba cyber');
  expect(resultado).toBe('Prueba cyber es seguro, sin virus.');
});

// Integration test: Prueba que el archivo entero funcione
test('hola-cyber.js corre sin errores', () => {
  // Simula correr el archivo (chequea que la función exista)
  expect(typeof scanSeguro).toBe('function');
  expect(scanSeguro('App')).toContain('seguro');  // Debe tener "seguro"
});

// Smoke test: Prueba básica, ¿todo arranca?
test('Código básico está OK', () => {
  expect(true).toBe(true);  // Siempre pasa, solo chequea que Jest corra
});
