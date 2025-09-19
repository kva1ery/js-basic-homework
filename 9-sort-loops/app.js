const arr = [1, 40, -5, 10, 0]

function sort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

console.log(sort(arr));