function check(b) {
    return b === '' ? b = '0' : b = b;
}

export function add(a, b) {
    return parseInt(check(a)) + parseInt(check(b));
}

export function subtract(a, b) {
    return parseInt(check(a)) - parseInt(check(b));
}

