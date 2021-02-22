function modificaPares(array, fx) {

    let arrayFinal = [];

    for (let i in array) {
        if (i % 2 !== 0) {
            arrayFinal.push(fx(array[i]));
        } else {
            arrayFinal.push(array[i]);
        }
    }
    return arrayFinal;
}

/* normalmente la función anónima se llama cb 0 "callback"*/

