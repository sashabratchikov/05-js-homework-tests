try {
    if (capitalize('Испробовать Их Все Должны Вы') !== 'Испробовать Их Все Должны Вы') {
        console.log('функция возвращает не то значение для "Испробовать Их Все Должны Вы"');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для "Испробовать Их Все Должны Вы"');
}
try {
    if (capitalize('молодость всё простит') !== 'Молодость Всё Простит') {
        console.log('функция возвращает не то значение для "молодость всё простит"');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для "молодость всё простит"');
}
try {
    const output = capitalize('молодость  всё  простит');
    if (typeof output !== 'string') {
        console.log('функция возвращает неверный тип для "молодость  всё  простит" два пробела');
    } else if (otput.replace(/[ ]+/g, ' ') !== 'Молодость Всё Простит') {
        console.log('НЕОБЯЗАТЕЛЬНЫЙ ТЕСТ: функция возвращает не то значение для "молодость  всё  простит" два пробела');
    } else {
        console.log('Студент учёл случай, когда слова разделены больше, чем одним пробелом. Молодец же!');
    }
} catch (excep) {
    console.log('НЕОБЯЗАТЕЛЬНЫЙ ТЕСТ: функция вызывает ошибку для "молодость  всё  простит" два пробела');
}
try {
    const output = capitalize(' ');
    if (typeof output !== 'string') {
        console.log('функция возвращает неверный тип для " " (пробел)');
    } else if (output.replace(/[ ]+/g, ' ') !== '') {
        console.log('функция возвращает не то значение для " " (пробел)');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для " " (пробел)');
}
try {
    const output = capitalize('слово ');
    if (typeof output !== 'string') {
        console.log('функция возвращает неверный тип для "слово " (с пробелом)');
    } else if (output.replace(/[ ]+/g, ' ') !== 'Слово') {
        console.log('функция возвращает не то значение для "слово " (с пробелом)');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для "слово " (с пробелом)');
}
try {
    if (capitalize('') !== '') {
        console.log('функция возвращает не то значение для пустой строки');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для пустой строки');
}