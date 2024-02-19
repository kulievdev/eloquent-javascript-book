function reverseArray(array) {
    const reversedArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }

    return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

function reverseArrayInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[i];
        const lastEle = array.length - 1 - i;
        array[i] = array[lastEle];
        array[lastEle] = temp;
    }
    return array;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
