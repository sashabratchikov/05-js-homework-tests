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
    palindrome;
} catch (e) {
    if (e.name === 'ReferenceError') {
        console.log(`%c функция ${e.message.split(' ')[0]} не объявлена`, errorStyle);
    }
}

runTest(palindrome, ['топот'], true);
runTest(palindrome, ['Saippuakivikauppias'], true);
runTest(palindrome, ['привет'], false);
runTest(palindrome, ['тоПоТ'], true);
runTest(palindrome, [''], true, '"" (пустая строка)');
runTest(palindrome, ['фунКция'], false);