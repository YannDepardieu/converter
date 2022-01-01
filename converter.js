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

    converter : (romanNumber) => {
        
        caractersArray = romanNumber.split('');

        let convertedNumber = 0;

        for (const caracter of caractersArray) {
            for (const index in app.romanNumbers) {
                if (caracter === index) {
                    //! il faut un verifier ici que convertedNumber est de la forme n+1 avec n un multiple de 10
                    if (convertedNumber === 1 && index === 'V') {
                        convertedNumber = app.romanNumbers[index] - convertedNumber;
                    }
                    else if (convertedNumber === 1 && index === 'X') {
                        convertedNumber = app.romanNumbers[index] - convertedNumber;
                    }
                    else {
                        convertedNumber += app.romanNumbers[index];
                    }
                    
                    console.log('app.romanNumbers[index] : ', app.romanNumbers[index]);
                }
            }
        }

        return convertedNumber;

    }
}

console.log(app.converter('XIV'));