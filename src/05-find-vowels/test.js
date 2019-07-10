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
    findVowels;
} catch (e) {
    if (e.name === 'ReferenceError') {
        console.log(`%c функция ${e.message.split(' ')[0]} не объявлена`, errorStyle);
    }
}

runTest(findVowels, ['здравствуй'], 2);
runTest(findVowels, ['здрАвстВуй'], 2);
runTest(findVowels, ['привет'], 2);
runTest(findVowels, ['хеллоу'], 3);
runTest(findVowels, ['123'], 0);
runTest(findVowels, [' '], 0, '" " (пробел)');
runTest(findVowels, [''], 0, '"" (пустая строка)');