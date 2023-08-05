'use strict';


let range = function (from, to, by = 1) {
    return {
        from: from,
        to: to,
        by: by,

        [Symbol.iterator]() {
            return {
                current: this.from,
                last: this.to,

                next() {
                    let tmp = this.current;
                    this.current += by;
                    if (tmp <= this.last) {
                        return {done: false, value: tmp};
                    } else {
                        return {done: true};
                    }
                }
            };
        }
    }
};


let tmp = range(1, 5)[Symbol.iterator]()
console.log(tmp.next())

for (let num of range(0, 11, 5)) {
    console.log(num);
}



Number.prototype[Symbol.iterator] = function () {
    let current = this
    return {
        next: () => {
            if (current) {
                let value = current % 10
                current = parseInt(current / 10)
                return {value, done: false}
            } else {
                return {done: true}
            }
        }
    }
}


