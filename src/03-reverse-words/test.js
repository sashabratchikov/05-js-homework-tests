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
    reverseWords;
} catch (e) {
    if (e.name === 'ReferenceError') {
        console.log(`%c функция ${e.message.split(' ')[0]} не объявлена`, errorStyle);
    }
}

runTest(reverseWords, ['всегда много путей достичь цель есть'], 'есть цель достичь путей много всегда');
runTest(reverseWords, ['испробовать их все должны вы'], 'вы должны все их испробовать');
runTest(reverseWords, ['Испробовать Их Все Должны Вы'], 'Вы Должны Все Их Испробовать');
runTest(reverseWords, [''], '', '"" (пустая строка)');

try {
    const output = reverseWords('Испробовать  Их  Все  Должны  Вы');
    if (typeof output !== 'string') {
        console.log('%c НЕОБЯЗАТЕЛЬНЫЙ ТЕСТ: функция возвращает неверный тип для "Испробовать  Их  Все  Должны  Вы" два пробела', 'color: orange;');
    } else if (output.replace(/[ ]+/g, ' ') !== 'Вы Должны Все Их Испробовать') {
        console.log('%c НЕОБЯЗАТЕЛЬНЫЙ ТЕСТ: функция возвращает не то значение для "Испробовать  Их  Все  Должны  Вы" два пробела', 'color: orange;');
    } else {
        console.log('%c Учтён случай, когда слова разделены больше, чем одним пробелом. Вы молодец!', 'color: green;');
    }
} catch (excep) {
    console.log('%c НЕОБЯЗАТЕЛЬНЫЙ ТЕСТ: функция вызывает ошибку для "Испробовать  Их  Все  Должны  Вы" два пробела', 'color: orange;');
}