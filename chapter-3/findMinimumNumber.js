function minimum(x, y) {
    return Math.min(x, y);
}

console.log(minimum(20, 5)); // 5
console.log(minimum(2, 49)); // 2

// Book solution

function min(a, b) {
    if (a < b) return a;
    else return b;
}

console.log(min(0, 10)); //  0
console.log(min(0, -10)); // -10
