function countBs(string) {
    let count = 0;

    for (const char of string) {
        if (char === "B") count++;
    }

    return count;
}

console.log(countBs("BuBble")); // 2

function countChar(string, character) {
    let count = 0;

    for (const char of string) {
        if (char === character) count++;
    }

    return count;
}

console.log(countChar("Microcalculator", "c")); // 3

function newCountBs(string) {
    return countChar(string, "B");
}

console.log(newCountBs("BuBble")); // 2

// Book solution

function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        }
    }
    return counted;
}

function countBs(string) {
    return countChar(string, "B");
}

console.log(countBs("BBC")); //  2
console.log(countChar("kakkerlak", "k")); //  4
