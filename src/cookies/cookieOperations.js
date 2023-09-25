let escapeSigns = '.()[]\\/+';
let notEscapeSigns = '$?*|{}^';

let replacePattern = Array.from(escapeSigns).map(sign => `\\${sign}`).join('') + notEscapeSigns;

console.log(replacePattern);

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    for (let optionKey in options) {
        updatedCookie += `; ${optionKey}`;

        let optionValue = options[optionKey];
        if(optionValue !== true) {
            updatedCookie += `=${optionValue}`
        }
        console.log(`setting up ${updatedCookie}`);
        document.cookie = updatedCookie;
    }
}
function isString(s) {
    return typeof(s) === 'string' || s instanceof String;
}

// fake cookie
let document = {
    _cookie: '',
    set cookie(value) {
        if (isString(value)) {
            this._cookie += value;
        }
    },

    get cookie() {
        return this._cookie;
    }
};
document.cookie = 'pixelRatio=2; username=stefan; ';

setCookie('name', 'value', {'max-age': 30});
console.log(document.cookie);