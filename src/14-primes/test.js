const errorStyle = 'color: red;';
const noErrorStyle = 'color: green;';

try {
    if (JSON.stringify(primes(6)) !== JSON.stringify([2, 3, 5])) {
        console.log('%c функция возвращает не то значение для 6', errorStyle);
    } else {
        console.log('%c функция работает правильно для 6', noErrorStyle);
    }
} catch (excep) {
    console.log('%c функция вызывает ошибку для 6', errorStyle);
}

try {
    if (JSON.stringify(primes(17)) !== JSON.stringify([2, 3, 5, 7, 11, 13, 17])) {
        console.log('%c функция возвращает не то значение для 17', errorStyle);
    } else {
        console.log('%c функция работает правильно для 17', noErrorStyle);
    }
} catch (excep) {
    console.log('%c функция вызывает ошибку для 17', errorStyle);
}

try {
    if (JSON.stringify(primes(-1)) !== JSON.stringify([])) {
        console.log('%c функция возвращает не то значение для -1', errorStyle);
    } else {
        console.log('%c функция работает правильно для -1', noErrorStyle);
    }
} catch (excep) {
    console.log('%c функция вызывает ошибку для -1', errorStyle);
}

try {
    if (JSON.stringify(primes(25)) !== JSON.stringify([2, 3, 5, 7, 11, 13, 17, 19, 23])) {
        console.log('%c функция возвращает не то значение для 25', errorStyle);
    } else {
        console.log('%c функция работает правильно для 25', noErrorStyle);
    }
} catch (excep) {
    console.log('%c функция вызывает ошибку для 25', errorStyle);
}