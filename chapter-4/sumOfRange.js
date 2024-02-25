function range1(start, end) {
    const array = [];

    for (let i = start; i <= end; i++) {
        array.push(i);
    }

    return array;
}

function range2(start, end, step) {
    const array = [];

    if (!step) {
        step = 1;
    }

    if (step < 0 && start > end) {
        for (let i = start; i >= end; i += step) {
            array.push(i);
        }
    }

    for (let i = start; i <= end; i += step) {
        array.push(i);
    }

    return array;
}

range2(5, 2, -1);

function sum(array) {
    let sum = 0;

    for (num of array) {
        sum += num;
    }

    return sum;
}

console.log(sum(range1(1, 10))); // 55
console.log(sum(range2(5, 2, -1))); // 14

// Book solution

function range(start, end, step = start < end ? 1 : -1) {
    let array = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
