try {
    let result = uniq([1, 2, 5, 4, 2]);
    if (Array.isArray(result)) {
        result.sort();
    }
    if (JSON.stringify(result) !== JSON.stringify([1, 2, 4, 5])) {
        console.log('функция возвращает не то значение для [1, 2, 5, 4, 2]');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для [1, 2, 5, 4, 2]');
}
try {
    result = uniq([3, 3, 3, 5]);
    if (Array.isArray(result)) {
        result.sort();
    }
    if (JSON.stringify(result) !== JSON.stringify([3, 5])) {
        console.log('функция возвращает не то значение для [3, 3, 3, 5]');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для [3, 3, 3, 5]');
}
try {
    result = uniq([1, 4, 2, 2, 3, 4, 8]);
    if (Array.isArray(result)) {
        result.sort();
    }
    if (JSON.stringify(result) !== JSON.stringify([1, 2, 3, 4, 8])) {
        console.log('функция возвращает не то значение для [1, 4, 2, 2, 3, 4, 8]');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для [1, 4, 2, 2, 3, 4, 8]');
}
try {
    if (JSON.stringify(uniq([])) !== JSON.stringify([])) {
        console.log('функция возвращает не то значение для []');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для []');
}