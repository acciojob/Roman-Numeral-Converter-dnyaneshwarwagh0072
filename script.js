

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

    let roman = '';
    const subtractionCases = {
        900: 'CM',
        400: 'CD',
        90: 'XC',
        40: 'XL',
        9: 'IX',
        4: 'IV'
    };

    for (const key in subtractionCases) {
        while (num >= key) {
            roman += subtractionCases[key];
            num -= key;
        }
    }
    for (let i = 0; i < 7; i++) {
        while (num >= obj[i][1]) {
            roman += obj[i][0];
            num -= obj[i][1];
        }
    }
    return roman;
}

console.log(convertToRoman(14));
console.log(convertToRoman(798));
module.exports = convertToRoman;
