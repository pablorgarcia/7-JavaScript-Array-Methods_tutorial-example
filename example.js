
// Métodos de Array

// Transforma cada número multiplicado por 2
[1, 2, 3].map(n => n * 2);

// Filtra la comida que no sea carnívora
['kiwi', 'brocoli', 'carne'].filter(n => n !== 'carne');

// Encuentra y devuelve la gallina
['dino', 'elefante', 'gallina'].find(n => n === 'gallina');

// Dime dónde está la gallina
['dino', 'elefante', 'gallina'].findIndex(n => n === 'gallina');

// Rellena el array de dinero
['', '', ''].fill('dinero');

// ¿Todo está ok?
['ok', 'error', 'ok', 'ok'].every(n => n === 'ok'); // resultado false

// ¿Hay algún error?
['ok', 'error', 'ok', 'ok'].some(n => n === 'error'); // resultado true
