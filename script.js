// function convertToRoman(num) {
//   const obj = {
//     0: ['M', 1000],
//     1: ['D', 500],
//     2: ['C', 100],
//     3: ['L', 50],
//     4: ['X', 10],
//     5: ['V', 5],
//     6: ['I', 1]
//   };
  
//   let roman = '';
//   for (let i in obj) {
//     while (num >= obj[i][1]) {
//       roman += obj[i][0];
//       num -= obj[i][1];
//     }
//   }
  
//   return roman;
// }
// console.log(convertToRoman(36));  
// module.exports = convertToRoman;

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
    let result = '';
    for (let i = 0; i < romanSymbols.length; i++) {
        while (num >= romanSymbols[i][1]) {
            result += romanSymbols[i][0];
            num -= romanSymbols[i][1];
        }
    }

    return result;
}
console.log(convertToRoman(798));
module.exports = convertToRoman;