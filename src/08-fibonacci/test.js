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
    fibonacci;
} catch (e) {
    if (e.name === 'ReferenceError') {
        console.log(`%c функция ${e.message.split(' ')[0]} не объявлена`, errorStyle);
    }
}

runTest(fibonacci, [1], 0, 0);
runTest(fibonacci, [2], 1, 2);
runTest(fibonacci, [3], 1, 3);
runTest(fibonacci, [4], 2, 4);
runTest(fibonacci, [5], 3, 5);
runTest(fibonacci, [6], 5, 6);