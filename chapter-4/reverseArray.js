function reverseArray1(array) {
    const reversedArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }

    return reversedArray;
}

console.log(reverseArray1([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

function reverseArrayInPlace1(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[i];
        const lastEleIdx = array.length - 1 - i;
        array[i] = array[lastEleIdx];
        array[lastEleIdx] = temp;
    }
    return array;
}

console.log(reverseArrayInPlace1([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// Book solution

function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"])); //  ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];

reverseArrayInPlace(arrayValue);

console.log(arrayValue); //  [5, 4, 3, 2, 1]
