const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let reduceStr = expr.split('');
    for (let i = 0; i < expr.length / 10 ; i++) {
        let shift = 10 * i;
        let subStr = reduceStr.slice(shift, shift + 10);
        if (subStr[0] === '*') {
            result += ' ';
        }
        else {
            let padding = 0;
            for (let j = 0; subStr[j] === '0'; j++) {
                padding = j;
            }
            let morseChar = '';
            let morse = '';
            if (padding > 0) {
                for (let k = padding; k < subStr.length - 2 ; k = k + 2) {
                    morseChar = subStr[k + 1] + subStr[k + 2];
                    if (morseChar === '10') morse += '.';
                    if (morseChar === '11') morse += '-';
                }
            }
            else {
                for (let k = padding; k < subStr.length; k = k + 2) {
                    morseChar = subStr[k] + subStr[k + 1];
                    if (morseChar === '10') morse += '.';
                    if (morseChar === '11') morse += '-';
                }
            }       
            for (let h in MORSE_TABLE) {
                if (morse === h) {
                    result += MORSE_TABLE[h];
                }
            }
        }
    }
return result;
}

module.exports = {
    decode
}