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
    anagram;
} catch (e) {
    if (e.name === 'ReferenceError') {
        console.log(`%c функция ${e.message.split(' ')[0]} не объявлена`, errorStyle);
    }
}

runTest(anagram, ['finder', 'Friend'], true, '"finder", "Friend"');
runTest(anagram, ['hello', 'bye'], false, '"hello", "bye"');
runTest(anagram, ['aba', 'ba'], false, '"aba", "ba"');
runTest(anagram, ['up', 'down'], false, '"up", "down"');
runTest(anagram, ['up', 'UP'], false, '"up", "UP"');