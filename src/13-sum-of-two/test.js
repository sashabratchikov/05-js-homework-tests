const errorStyle = 'color: red;';
const noErrorStyle = 'color: green;';

function runTest(studentFunc, args, requiredRes, argName = `"${args[0]}"`) {
    try {
        if (studentFunc(...args) !== requiredRes) {
            console.log(`%c функция возвращает не то значение для ${argName}`, errorStyle);
        } else {
            console.log(`%c функция работает правильно для ${argName}`, noErrorStyle);
        }
    } catch (excep) {
        console.log(`%c функция вызывает ошибку для ${argName}`, errorStyle);
    }
}

try {
    sumOfTwo;
} catch (e) {
    if (e.name === 'ReferenceError') {
        console.log(`%c функция ${e.message.split(' ')[0]} не объявлена`, errorStyle);
    }
}

runTest(sumOfTwo, [[1, 2, 3, 4, 5], 4], true, '[1, 2, 3, 4, 5], 4');
runTest(sumOfTwo, [[1, 2, 3, 4, 5], 100], false, '[1, 2, 3, 4, 5], 100');
runTest(sumOfTwo, [[1, 1, 1], 2], true, '[1, 1, 1], 2');
runTest(sumOfTwo, [[1, -1, 1], 0], true, '[1, -1, 1], 0');
runTest(sumOfTwo, [[1, 5], 5], false, '[1, 5], 5');
runTest(sumOfTwo, [[5], 5], false, '[5], 5');
runTest(sumOfTwo, [[], 0], false, '[], 0');