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
    return fromAscii(code);
}

function caesarCipher(str, shift) {
    return Array.from(
        str, char => cipherOne(char, shift)
    ).join('');
}

let cipher = `lorem ipsum dolor sit amet, consectetur adipiscing elit.`.toLowerCase();

for (let i = 0; i < 27; i++) {
    console.log(caesarCipher(cipher, i));
}



