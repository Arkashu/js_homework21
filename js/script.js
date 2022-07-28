'use strict'

const exponentiation = (numb, degr) => {
    const result = Math.pow(numb, degr);
    alert(result);
}

const mainFunction = callback => {
    const num = +prompt('Введите число');
    const degree = +prompt('Введите степень');
    callback(num, degree);
}
mainFunction(exponentiation);