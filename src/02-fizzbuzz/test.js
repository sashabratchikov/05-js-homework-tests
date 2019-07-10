function fizzBuzzTest(num) {
    if (typeof num !== 'number' || isNaN(num) || num % 1 !== 0) {
        return;
    }
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}
const oldLog = console.log;
let output = [];
console.log = function(text) {
    output.push(text);
}
function test(val) {
    output = [];
    fizzBuzzTest(val);
    const TestOutput = output;
    output = [];
    fizzBuzz(val);
    if (JSON.stringify(TestOutput) !== JSON.stringify(output)) {
        oldLog('функция выводит в консоль неверное значение для ' + JSON.stringify(val));
    }
}
try {
    for (let i = -15; i <= 15; i++) {
        test(i);
    }
} catch (excep) {
    oldLog('функция вызвала ошибку(' + excep + ')');
}
console.log = oldLog;