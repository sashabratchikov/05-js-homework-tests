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
    isPrime;
} catch (e) {
    if (e.name === 'ReferenceError') {
        console.log(`%c функция ${e.message.split(' ')[0]} не объявлена`, errorStyle);
    }
}

runTest(isPrime, [0], false, 0);
runTest(isPrime, [1], false, 1);
runTest(isPrime, [2], true, 2);
runTest(isPrime, [3], true, 3);
runTest(isPrime, [6], false, 6);
runTest(isPrime, [17], true, 17);
runTest(isPrime, [997], true, 997);
runTest(isPrime, [998], false, 998);