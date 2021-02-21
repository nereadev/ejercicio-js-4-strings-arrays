function modificaPares(array, fx) {

    let arrayPares = array.filter(palabra => palabra.length % 2 === 0);
    let arrayFinal = arrayPares.map(fx);
    return arrayFinal;
}

