
n(a, op, b) {
    this.a = a;
    this.op = op;
    this.b = b;
};

Puff.prototype.eval = function() {
    this.b = eval( ('' + this.a) + this.op + ('' + this.b) );
    this.a = null;
    this.op = null;
};

Puff.prototype.valueOf = function() {
    return this.b;
}

function op(op, num) {
    return new Puff(null, op, num);
}

function num(p, num) {
    if (p) {
        p.a = num;
        p.eval();

        return p.valueOf();
    } else {
        return num;
    }
}

function zero(p) {
    return num(p || null, 0);
}

function one(p) {
    return num(p || null, 1);
}

function two(p) {
    return num(p || null, 2);
}
function three(p) {
    return num(p || null, 3);
}

function four(p) {
    return num(p || null, 4);
}

function five(p) {
    return num(p || null, 5);
}

function six(p) {
    return num(p || null, 6);
}

function seven(p) {
    return num(p || null, 7);
}

function eight(p) {
    return num(p || null, 8);
}

function nine(p) {
    return num(p || null, 9);
}


function plus(num) {
    return op('+', num);
}

function times(num) {
    return op('*', num);
}

function minus(num) {
    return op('-', num);
}

function dividedBy(num) {
    return op('/', num);
}
