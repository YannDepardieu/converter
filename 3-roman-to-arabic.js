
const romanNumTestArray1 = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI',
'XVII', 'XVIII', 'XIX', 'XX', 'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX', 'XXX', 'XXXI', 'XXXII', 
'XXXIII', 'XXXIV', 'XXXV', 'XXXVI', 'XXXVII', 'XXXVIII', 'XXXIX'];

const romanNumTestArray25 = ['XL', 'XLI'];

const romanNumTestArray2 = ['XL', 'XLI', 'XLII', 'XLIII', 'XLIV', 'XLV', 'XLVI', 'XLVII', 'XLVIII', 'XLIX', 'L', 'LI', 'LII',
'LIII', 'LIV', 'LV', 'LVI', 'LVII', 'LVIII', 'LIX', 'LX', 'LXI'];

const romanNumTestArray3 = ['LXXXIX', 'XC', 'XCI', 'XCII', 'XCIII', 'XCIV', 'XCV', 'XCVI', 'XCVII', 'XCVIII', 'XCIX', 'C',
'CI', 'CIV', 'CV', 'CVI', 'CIX', 'CX', 'CXI', 'CXLIV'];

const romanNumTestArray4 = ['CD', 'CDXLIV', 'CDXCIX', 'DCCLI', 'CM', 'MC', 'MMCXLIII'];

const app = {
    romanNumbers : {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    },

    converter : (romanNum) => {
        
        const caractersArray = romanNum.split('');

        let arabicNum = 0;
        // On boucle sur chaque caratère romain
        for (let i = 0; i < caractersArray.length; i ++) {
            
            for (const index in app.romanNumbers) {
                if (caractersArray[i] === index) {
                    // Règle = Toute lettre L1 placée immédiatement à la gauche d'une autre lettre L2 > L1 se retranche de celle-ci.
                    if (app.romanNumbers[caractersArray[i]] > app.romanNumbers[caractersArray[i-1]]) {
                        arabicNum += app.romanNumbers[caractersArray[i]] - 2 * app.romanNumbers[caractersArray[i-1]] ;
                    }
                    else {
                        arabicNum += app.romanNumbers[index];
                    }
                }
            }
        }
        return arabicNum;
    }
}

const result = {};

for (const num of romanNumTestArray4) {
    // console.log(`##################################  ${num}  #####################################`);
    result[num] = app.converter(num);
}

console.table(result);