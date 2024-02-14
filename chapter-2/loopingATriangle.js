let output = "#";

while (output.length < 7) {
    console.log(output);
    output += "#";
}

// Book solution

for (let line = "#"; line.length < 8; line += "#") console.log(line);
