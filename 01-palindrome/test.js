try {
    if (palindrome('топот') !== true) {
        console.log('функция возвращает не то значение для "топот"');
    }
} catch (excep) {
    console.log('функция возвращает не то значение для "топот"');
}
try {
    if (palindrome('Saippuakivikauppias') !== true) {
        console.log('функция возвращает не то значение для "Saippuakivikauppias"');
    }
} catch (excep) {
    console.log('функция возвращает не то значение для "Saippuakivikauppias"');
}
try {
    if (palindrome('привет') !== false) {
        console.log('функция возвращает не то значение для "привет"');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для "привет"');
}
try {
    if (palindrome('тоПоТ') !== true) {
        console.log('функция возвращает не то значение для "тоПоТ"');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для "тоПоТ"');
}
try {
    if (palindrome('') !== true) {
        console.log('функция возвращает не то значение для пустой строки');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для пустой строки');
}
try {
    if (palindrome('фунКция') !== false) {
        console.log('функция возвращает не то значение для "фунКция"');
    }
} catch (excep) {
    console.log('функция вызывает ошибку для "фунКция"');
}