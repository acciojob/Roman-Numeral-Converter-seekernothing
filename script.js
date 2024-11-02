function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

	// write your code here

    let result = "";
    let remaining = num;

    // Special cases for numbers 900-999
    if (remaining >= 900 && remaining < 1000) {
        result += "CM";
        remaining -= 900;
    }

    // Handle thousands (M)
    while (remaining >= obj[0][1]) {
        result += obj[0][0];
        remaining -= obj[0][1];
    }

    // Special cases for numbers 400-499
    if (remaining >= 400 && remaining < 500) {
        result += "CD";
        remaining -= 400;
    }

    // Handle hundreds (D, C)
    if (remaining >= obj[1][1]) {
        result += obj[1][0];
        remaining -= obj[1][1];
    }

    while (remaining >= obj[2][1]) {
        result += obj[2][0];
        remaining -= obj[2][1];
    }

    // Special cases for numbers 90-99
    if (remaining >= 90 && remaining < 100) {
        result += "XC";
        remaining -= 90;
    }

    // Handle tens (L, X)
    if (remaining >= obj[3][1]) {
        result += obj[3][0];
        remaining -= obj[3][1];
    }

    while (remaining >= obj[4][1]) {
        result += obj[4][0];
        remaining -= obj[4][1];
    }

    // Special cases for numbers 9
    if (remaining === 9) {
        result += "IX";
        remaining -= 9;
    }

    // Handle ones (V, I)
    if (remaining >= obj[5][1]) {
        result += obj[5][0];
        remaining -= obj[5][1];
    }

    // Special cases for number 4
    if (remaining === 4) {
        result += "IV";
        remaining -= 4;
    }

    while (remaining >= obj[6][1]) {
        result += obj[6][0];
        remaining -= obj[6][1];
    }

    return result;
}