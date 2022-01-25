const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const arrayOfCharacters = [];

    for (let i = 0; i < expr.length; i += 10) {
        let part = expr.slice(i, i + 10);

        while (part.includes('10') || part.includes('11')) {
            part = part.replace('10', '.');
            part = part.replace('11', '-')
        }

        const letter = [...part].filter((el) => el !== '0').join('');

        arrayOfCharacters.push(letter);
    }


    return arrayOfCharacters.map((character) => MORSE_TABLE[character] ? MORSE_TABLE[character] : ' ').join('');

}

module.exports = {
    decode
}