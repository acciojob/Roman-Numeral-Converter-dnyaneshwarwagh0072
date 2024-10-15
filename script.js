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

    const romanSpecialCases = {
        900: "CM",
        400: "CD",
        90: "XC",
        40: "XL",
        9: "IX",
        4: "IV"
    };

    let roman = "";

    // Handle special cases like 900, 400, etc.
    for (const [value, symbol] of Object.entries(romanSpecialCases)) {
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
    }

    // Handle general roman numerals
    for (let i = 0; i <= 6; i++) {
        const [symbol, value] = obj[i];
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
    }

    return roman;
}

console.log(convertToRoman(36));  // Output: XXXVI
module.exports = convertToRoman;
