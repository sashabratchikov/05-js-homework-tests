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
    factorial;
} catch (e) {
    if (e.name === 'ReferenceError') {
        console.log(`%c функция ${e.message.split(' ')[0]} не объявлена`, errorStyle);
    }
}

runTest(factorial, [0], 1, 0);
runTest(factorial, [1], 1, 1);
runTest(factorial, [2], 2, 2);
runTest(factorial, [3], 6, 3);
runTest(factorial, [6], 720, 6);
runTest(factorial, [9], 362880, 9);