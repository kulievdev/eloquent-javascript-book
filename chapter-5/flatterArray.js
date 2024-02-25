const flattenArray = (array) => {
    return array.reduce((acc, innerArray) => {
        return acc.concat(innerArray);
    }, []);
};

console.log(
    flattenArray([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
);

// [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Book solution

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), [])); //  [1, 2, 3, 4, 5, 6]
