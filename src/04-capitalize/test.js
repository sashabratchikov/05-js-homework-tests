const errorStyle = 'color: red;';
const noErrorStyle = 'color: green;';

try {
    if (capitalize('Испробовать Их Все Должны Вы') !== 'Испробовать Их Все Должны Вы') {
        console.log('%c функция возвращает не то значение для "Испробовать Их Все Должны Вы"', errorStyle);
    }
} catch (excep) {
    console.log('%c функция вызывает ошибку для "Испробовать Их Все Должны Вы"', errorStyle);
}

try {
    if (capitalize('молодость всё простит') !== 'Молодость Всё Простит') {
        console.log('%c функция возвращает не то значение для "молодость всё простит"', errorStyle);
    }
} catch (excep) {
    console.log('%c функция вызывает ошибку для "молодость всё простит"', errorStyle);
}

try {
    const output = capitalize(' ');
    if (typeof output !== 'string') {
        console.log('%c функция возвращает неверный тип для " " (пробел)', errorStyle);
    } else if (output !== '' && output !== ' ') {
        console.log('%c функция возвращает не то значение для " " (пробел)', errorStyle);
    }
} catch (excep) {
    console.log('%c функция вызывает ошибку для " " (пробел)', errorStyle);
}

try {
    const output = capitalize('слово ');
    if (typeof output !== 'string') {
        console.log('%c функция возвращает неверный тип для "слово " (с пробелом)', errorStyle);
    } else if (output !== 'Слово' && output !== 'Слово ') {
        console.log('%c функция возвращает не то значение для "слово " (с пробелом)', errorStyle);
    }
} catch (excep) {
    console.log('%c функция вызывает ошибку для "слово " (с пробелом)', errorStyle);
}

try {
    if (capitalize('') !== '') {
        console.log('%c функция возвращает не то значение для пустой строки', errorStyle);
    }
} catch (excep) {
    console.log('%c функция вызывает ошибку для пустой строки', errorStyle);
}

try {
    const output = capitalize('молодость  всё  простит');
    if (typeof output !== 'string') {
        console.log('%c НЕОБЯЗАТЕЛЬНЫЙ ТЕСТ: функция возвращает неверный тип для "молодость  всё  простит" два пробела', 'color: orange;');
    } else if (output.replace(/[ ]+/g, ' ') !== 'Молодость Всё Простит') {
        console.log('%c НЕОБЯЗАТЕЛЬНЫЙ ТЕСТ: функция возвращает не то значение для "молодость  всё  простит" два пробела', 'color: orange;');
    } else {
        console.log('%c Учтён случай, когда слова разделены больше, чем одним пробелом. Круто!', noErrorStyle);
    }
} catch (excep) {
    console.log('%c НЕОБЯЗАТЕЛЬНЫЙ ТЕСТ: функция вызывает ошибку для "молодость  всё  простит" два пробела', 'color: orange;');
}
