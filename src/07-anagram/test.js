try {
    if (anagram('finder', 'Friend') !== true) {
        console.log('функция возвращает не то значение для "finder", "Friend"');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для "finder", "Friend"');
}
try {
    if (anagram('hello', 'bye') !== false) {
        console.log('функция возвращает не то значение для "hello", "bye"');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для "hello", "bye"');
}
try {
    if (anagram('aba', 'ba') !== false) {
        console.log('функция возвращает не то значение для "aba", "ba"');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для "aba", "ba"');
}
try {
    if (anagram('up', 'down') !== false) {
        console.log('функция возвращает не то значение для "up", "down"');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для "up", "down"');
}
try {
    if (anagram('up', 'UP') !== true) {
        console.log('функция возвращает не то значение для "up", "UP"');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для "up", "UP"');
}
