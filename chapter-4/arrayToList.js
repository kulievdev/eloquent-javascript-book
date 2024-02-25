function arrayToList1(array) {
    let list = null;

    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }

    return list;
}

console.log(arrayToList1([1, 2, 3]));

const list = arrayToList1([1, 2, 3]); // { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

function listToArray1(list) {
    let array = [];

    while (list !== null) {
        array.push(list.value);
        list = list.rest;
    }

    return array;
}

console.log(listToArray1(list)); // [1, 2, 3]

// Book solution

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(value, list) {
    return { value, rest: list };
}

function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20])); //  {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30]))); //  [10, 20, 30]
console.log(prepend(10, prepend(20, null))); //  {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1)); //  20
