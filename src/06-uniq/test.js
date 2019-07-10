try {
    let result = uniq([1, 2, 5, 4, 2]);
    if (Array.isArray(result)) {
        result.sort();
    }
    if (JSON.stringify(result) !== JSON.stringify([1, 2, 4, 5])) {
        console.log('%c функция возвращает не то значение для [1, 2, 5, 4, 2]', 'color: red;');
    } else {
        console.log('%c функция работает правильно для [1, 2, 5, 4, 2]', 'color: green;');
    }
} catch (excep) {
    console.log('%c функция вызывает ошибку для [1, 2, 5, 4, 2]', 'color: red;');
}
try {
    result = uniq([3, 3, 3, 5]);
    if (Array.isArray(result)) {
        result.sort();
    }
    if (JSON.stringify(result) !== JSON.stringify([3, 5])) {
        console.log('%c функция возвращает не то значение для [3, 3, 3, 5]', 'color: red;');
    } else {
        console.log('%c функция работает правильно для [3, 3, 3, 5]', 'color: green;');
    }
} catch (excep) {
    console.log('%c функция вызывает ошибку для [3, 3, 3, 5]', 'color: red;');
}
try {
    result = uniq([1, 4, 2, 2, 3, 4, 8]);
    if (Array.isArray(result)) {
        result.sort();
    }
    if (JSON.stringify(result) !== JSON.stringify([1, 2, 3, 4, 8])) {
        console.log('%c функция возвращает не то значение для [1, 4, 2, 2, 3, 4, 8]', 'color: red;');
    } else {
        console.log('%c функция работает правильно для [1, 4, 2, 2, 3, 4, 8]', 'color: green;');
    }
} catch (excep) {
    console.log('%c функция вызывает ошибку для [1, 4, 2, 2, 3, 4, 8]', 'color: red;');
}
try {
    if (JSON.stringify(uniq([])) !== JSON.stringify([])) {
        console.log('%c функция возвращает не то значение для []', 'color: red;');
    } else {
        console.log('%c функция работает правильно для []', 'color: green;');
    }
} catch (excep) {
    console.log('%c функция вызывает ошибку для []', 'color: red;');
}