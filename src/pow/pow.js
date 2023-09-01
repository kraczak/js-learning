function pow(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / pow(x, -n);
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

throw new Error('lol');