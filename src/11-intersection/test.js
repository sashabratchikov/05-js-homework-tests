const errorStyle = 'color: red;';
const noErrorStyle = 'color: green;';

try {
    let res = intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]);
    res.sort();
    if (JSON.stringify(res) !== JSON.stringify([1, 4])) {
        console.log('%c функция возвращает не то значение для [1, 5, 4, 2], [8, 91, 4, 1, 3]', errorStyle);
    } else {
        console.log('%c функция работает правильно для [1, 5, 4, 2], [8, 91, 4, 1, 3]', noErrorStyle);
    }
} catch (excep) {
    console.log('%c функция вызывает ошибку для [1, 5, 4, 2], [8, 91, 4, 1, 3]', errorStyle);
}
try {
    res = intersection([1, 5, 4, 2], [7, 12]);
    res.sort();
    if (JSON.stringify(res) !== JSON.stringify([])) {
        console.log('%c функция возвращает не то значение для [1, 5, 4, 2], [7, 12]', errorStyle);
    } else {
        console.log('%c работает правильно для для [1, 5, 4, 2], [7, 12]', noErrorStyle);
    }
} catch (excep) {
    console.log('%c функция вызывает ошибку для [1, 5, 4, 2], [7, 12]', errorStyle);
}

try {
    res = intersection([1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3]);
    res.sort();
    if (JSON.stringify(res) !== JSON.stringify([1, 4])) {
        console.log('%c функция возвращает не то значение для [1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3] правильно [1, 4]', errorStyle);
    } else {
        console.log('%c работает правильно для для [1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3]', noErrorStyle);
    }
} catch (excep) {
    console.log('%c функция вызывает ошибку для [1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3] правильно [1, 4]', errorStyle);
}