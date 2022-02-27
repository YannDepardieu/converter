const arabicNumTestArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ,14 ,15 , 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 
27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

const arabicNumTestArray2 = ['XL', 'XLI', 'XLII', 'XLIII', 'XLIV', 'XLV', 'XLVI', 'XLVII', 'XLVIII', 'XLIX', 'L', 'LI', 'LII',
'LIII', 'LIV', 'LV', 'LVI', 'LVII', 'LVIII', 'LIX', 'LX', 'LXI'];

const arabicNumTestArray3 = ['LXXXIX', 'XC', 'XCI', 'XCII', 'XCIII', 'XCIV', 'XCV', 'XCVI', 'XCVII', 'XCVIII', 'XCIX', 'C',
'CI', 'CIV', 'CV', 'CVI', 'CIX', 'CX', 'CXI', 'CXLIV'];

const arabicNumTestArray4 = ['CD', 'CDXLIV', 'CDXCIX', 'DCCLI', 'CM', 'MC', 'MMCXLIII'];

const app = {
    correlationObj : {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    },

    converter : (arabicNum) => {

        let romanNum = '';
        // On boucle sur chaque caratère romain
        // Si on ne trouve pas de correspondance alors on boucle sur le nombre arabe, en ajoutant I à chaque fois
        // Jusqu'à trouver une correspondance
        for (let i = arabicNum; i >= 0 ; i --) {
            console.log(i);
            for (const index of Object.keys(app.correlationObj)) {
                if (i === app.correlationObj[index]) {
                    console.log(index);
                    romanNum += `${index}`;
                }
                else {
                    romanNum += 'I';
                }
                console.log('romanNum : ', romanNum);
            }
        }
        return romanNum;
    }
}

console.log('return : ', app.converter(10)) ;


// const result = {};

// for (const num of arabicNumTestArray1) {
//     // console.log(`##################################  ${num}  #####################################`);
//     result[num] = app.converter(num);
// }

// console.table(result);