const validCard = '4561-2612-1234-5467';
const invalidCard = '4561-2612-1234-5464';

function validateCard(card) {
    const clearedCard = clearCard(card);
    const validators = [validateCardIsNumber, validateCardLength, validateLuna];
    
    let result = true;
    for (const validator of validators) {
        if (!validator(clearedCard)) {
            result = false;
            break;
        }
    }

    return result;
}

const clearCard = card => card.trim().replaceAll('-','');

const validateCardIsNumber = card => !isNaN(card);
const validateCardLength = card => card.length === 16;

function validateLuna(card) {
    const summ = card
    .split('')
    .map(c => Number(c))
    .reduce((acc, el, i) => {
        if ((i+1) % 2 === 1) {
            return acc + (el * 2 > 9 ? el * 2 - 9 : el * 2);
        } else {
            return acc + el;
        }
    }, 0);

    return summ % 10 === 0;
}


console.log('valid card:', validCard, '-', validateCard(validCard));
console.log('invalid card:', invalidCard, '-', validateCard(invalidCard));