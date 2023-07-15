"use strict"


function toAscii(str) {
    return str.charCodeAt();
}

function fromAscii(code) {
    return String.fromCharCode(code);
}

function generateAlphabet() {
    let result = [];
    for (let i = toAscii('a'); i <= toAscii('z'); i++) {
        result.push(fromAscii(i));
    }
    return result;
}
function cipherOne(char, shift) {
    if (!generateAlphabet().includes(char)) {
        return char;
    }
    let code = toAscii(char);
    code += shift;
    if (code > toAscii('z')) {
        code -= 26;
    } else if (code < toAscii('a')) {
        code += 26;
    }
    let result = fromAscii(code)
    return result;
}

function caesarCipher(str, shift) {
    return Array.from(
        str, char => cipherOne(char, shift)
    ).join('');
}


let lol = `
lorem ipsum dolor sit amet, consectetur adipiscing elit.
`.toLowerCase();

lol = lol.replace('\n', '');

for (let i = 0; i < 27; i++) {
    console.log(caesarCipher(lol, i));
}



