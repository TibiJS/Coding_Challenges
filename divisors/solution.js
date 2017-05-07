function divisors(integer) {
    var result = [];
    for (let i = 0; i < integer; i++) {
        if (integer % i == 0 && i !== 1 && i !== integer) {
            result.push(i);
        }
    }

    if (result.length > 0) {
        return result;
    } else {
        return `${integer} is prime`;
    }
};