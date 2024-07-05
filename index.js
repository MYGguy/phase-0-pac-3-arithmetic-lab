function add(a , b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n) {
    n++;
    return n;
}

function decrement(n) {
    n--;
    return n--;
}

function makeInt(string) {
    // parseInt(string, 10);

    // parseInt(string, 10);

    // parseInt(string, 10);

    console.log(parseInt(string, 10));

    // return string;

    return parseInt(string, 10);
}
// makeInt('0x2328');

// console.log(parseInt('0x2328'));

function preserveDecimal(string) {
    return parseFloat(string);
}