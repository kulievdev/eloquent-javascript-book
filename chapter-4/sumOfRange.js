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
