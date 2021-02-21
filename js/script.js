let palabras = ['café', 'croissant', 'tostada', 'zumo'];

let palabrasFinal = modificaPares(palabras,
    (palabra => palabra.charAt(0).toUpperCase()
        + palabra.slice(1)));

console.log(palabrasFinal);