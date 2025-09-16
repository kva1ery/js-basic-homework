function crypto(value) {
    if (!value || value.length < 2) {
        return;
    }
    
    const symbols = value.split('');
    const middle = Math.floor(symbols.length / 2);
    const firstPie = symbols.splice(0, middle);

    return firstPie.reverse().join("") + symbols.reverse().join("");
}

function check(encryptedValue, value) {
    return crypto(encryptedValue) === value;
}

const password = 'password1';
const encryptedPassword = crypto(password);
console.log(encryptedPassword);
console.log(check(encryptedPassword, password));
console.log(check(encryptedPassword, 'wrong'));
