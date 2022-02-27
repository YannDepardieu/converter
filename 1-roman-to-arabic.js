/*
I -> 1
II -> 2
III -> 3
IV -> 4
V -> 5
VI -> 6
VII -> 7
VIII -> 8
IX -> 9
X -> 10
*/

const romanNumTestArray = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI',
'XVII', 'XVIII', 'XIX', 'XX', 'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX', 'XXX', 'XXXI', 'XXXII', 
'XXXIII', 'XXXIV', 'XXXV', 'XXXVI', 'XXXVII', 'XXXVIII', 'XXXIX'];

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

        for (const caracter of caractersArray) {

            for (const index in app.romanNumbers) {
                if (caracter === index) {
                    console.log('index === ', index);
                    //! il faut un verifier ici que arabicNum est de la forme n+1 avec n un multiple de 10
                    if ( (arabicNum - 1) % 10 === 0  && index === 'V' ) {
                        arabicNum += app.romanNumbers[index] - 2;
                    }
                    else if (  (arabicNum - 1) % 10 === 0  &&  index === 'X' ) {
                        arabicNum += app.romanNumbers[index] - 2;
                    }
                    else if (  (arabicNum - 10) % 100 === 0  &&  index === 'L' ) {
                        arabicNum += app.romanNumbers[index] - 20;
                    }
                    else if (  (arabicNum - 10) % 100 === 0  &&  index === 'C' ) {
                        arabicNum += app.romanNumbers[index] - 20;
                    }
                    else if (  (arabicNum - 100) % 1000 === 0  &&  index === 'D' ) {
                        arabicNum += app.romanNumbers[index] - 200;
                    }
                    else if (  (arabicNum - 100) % 1000 === 0  &&  index === 'M' ) {
                        arabicNum += app.romanNumbers[index] - 200;
                    }
                    else {
                        arabicNum += app.romanNumbers[index];
                        console.log('arabicNum === ', arabicNum);
                    }
                }
            }

        }

        return arabicNum;
    }
}

const result = {};

for (const num of romanNumTestArray4) {
    console.log(`##################################  ${num}  #####################################`)
    result[num] = app.converter(num);
}

console.table(result);