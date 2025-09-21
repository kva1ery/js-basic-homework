function arrayClean(arr, predicate) {
    const result = [];
    for (const element of arr) {
        if (!predicate(element)) {
            result.push(element);
        }
    }
    return result;
}

function isEven(num) {
    return num % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6];
const cleanedArray = arrayClean(numbers, isEven);
console.log(cleanedArray); // Output: [1, 3, 5]