function crypto(value) {
    if (!value) {
        return;
    }
    
    if (value.length == 1) {
        return value;
    }

    const symbols = value.split('');
    if (value.length === 2) {
        return symbols.reverse().join('');
    }

    const middle = Math.floor(symbols.length / 2);
    const firstPie = symbols.splice(0, middle);

    return firstPie.reverse().join('') + symbols.reverse().join('');
}

function check(encryptedValue, value) {
    return crypto(encryptedValue) === value;
}

const password = 'password';
const encryptedPassword = crypto(password);
console.log(encryptedPassword);
console.log(check(encryptedPassword, password));
console.log(check(encryptedPassword, 'wrong'));
