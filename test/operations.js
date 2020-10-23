
const cx = require('..');

exports['create complex number'] = function (test) {
    const cnumber = cx.complex(1, 2);
    
    test.ok(cnumber);
    test.equal(cnumber.real(), 1);
    test.equal(cnumber.imag(), 2);
};

exports['add two complex numbers'] = function (test) {
    const cnumber1 = cx.complex(1, 2);
    const cnumber2 = cx.complex(3, 4);
    
    const result = cnumber1.add(cnumber2);
    
    test.ok(result);
    test.equal(result.real(), 4);
    test.equal(result.imag(), 6);
};

exports['add complex number to real number'] = function (test) {
    const cnumber1 = cx.complex(1, 2);
    const rnumber2 = 3;
    
    const result = cnumber1.add(rnumber2);
    
    test.ok(result);
    test.equal(result.real(), 4);
    test.equal(result.imag(), 2);
};

exports['subtract two complex numbers'] = function (test) {
    const cnumber1 = cx.complex(1, 2);
    const cnumber2 = cx.complex(3, 7);
    
    const result = cnumber1.sub(cnumber2);
    
    test.ok(result);
    test.equal(result.real(), -2);
    test.equal(result.imag(), -5);
};

exports['subtract real number from complex number'] = function (test) {
    const cnumber1 = cx.complex(1, 2);
    const rnumber2 = 3;
    
    const result = cnumber1.sub(rnumber2);
    
    test.ok(result);
    test.equal(result.real(), -2);
    test.equal(result.imag(), 2);
};

exports['multiply two complex numbers'] = function (test) {
    const cnumber1 = cx.complex(2, 3);
    const cnumber2 = cx.complex(3, 7);
    
    const result = cnumber1.mult(cnumber2);
    
    test.ok(result);
    test.equal(result.real(), 2*3 - 3*7);
    test.equal(result.imag(), 3*3 + 2*7);
};

exports['multiply complex number by real number'] = function (test) {
    const cnumber1 = cx.complex(2, 3);
    const rnumber2 = 3;
    
    const result = cnumber1.mult(rnumber2);
    
    test.ok(result);
    test.equal(result.real(), 2*3);
    test.equal(result.imag(), 3*3);
};

exports['abs value'] = function (test) {
    const cnumber = cx.complex(3, 4);
    
    const result = cnumber.abs();
    
    test.ok(result);
    test.equal(result, 5);
};

exports['toString'] = function (test) {
    test.equal(cx.complex(3, 4).toString(), "3 + 4i");
    test.equal(cx.complex(0, 0).toString(), "0 + 0i");
    test.equal(cx.complex(1.2, 3.4).toString(), "1.2 + 3.4i");
};

exports['conjugate'] = function (test) {
    const cnumber = cx.complex(2, 3);
    
    const result = cnumber.conj();
    
    test.ok(result);
    test.equal(result.real(), 2);
    test.equal(result.imag(), -3);
    
    const result2 = result.conj();
    
    test.ok(result2);
    test.equal(result2.real(), 2);
    test.equal(result2.imag(), 3);
};

exports['inverse'] = function (test) {
    const cnumber = cx.complex(3, 4);
    
    const result = cnumber.inv();
    
    test.ok(result);
    test.equal(result.real(), 3 / 25);
    test.equal(result.imag(), -4 / 25);
    
    const result2 = cnumber.mult(result);
    
    test.ok(result2);
    test.equal(result2.real(), 1);
    test.equal(result2.imag(), 0);
};

exports['divide'] = function (test) {
    const cnumber = cx.complex(3, 4);
    
    const result = cnumber.div(cnumber);
    
    test.ok(result);
    test.equal(result.real(), 1);
    test.equal(result.imag(), 0);
    
    const result2 = cnumber.div(cx.complex(0, 1));
    
    test.ok(result2);
    test.equal(result2.real(), 4);
    test.equal(result2.imag(), -3);
};

exports['divide by real'] = function (test) {
    const cnumber = cx.complex(3, 4);
    
    const result = cnumber.div(2);
    
    test.ok(result);
    test.equal(result.real(), 1.5);
    test.equal(result.imag(), 2);
};

