
var cx = require('..');

exports['create complex number'] = function (test) {
    var cnumber = cx.create(1, 2);
    
    test.ok(cnumber);
    test.equal(cnumber.real(), 1);
    test.equal(cnumber.imag(), 2);
};

exports['add two complex numbers'] = function (test) {
    var cnumber1 = cx.create(1, 2);
    var cnumber2 = cx.create(3, 4);
    
    var result = cnumber1.add(cnumber2);
    
    test.ok(result);
    test.equal(result.real(), 4);
    test.equal(result.imag(), 6);
};

exports['subtract two complex numbers'] = function (test) {
    var cnumber1 = cx.create(1, 2);
    var cnumber2 = cx.create(3, 7);
    
    var result = cnumber1.sub(cnumber2);
    
    test.ok(result);
    test.equal(result.real(), -2);
    test.equal(result.imag(), -5);
};

exports['multiply two complex numbers'] = function (test) {
    var cnumber1 = cx.create(2, 3);
    var cnumber2 = cx.create(3, 7);
    
    var result = cnumber1.mult(cnumber2);
    
    test.ok(result);
    test.equal(result.real(), 2*3 - 3*7);
    test.equal(result.imag(), 3*3 + 2*7);
};

exports['abs value'] = function (test) {
    var cnumber = cx.create(3, 4);
    
    var result = cnumber.abs();
    
    test.ok(result);
    test.equal(result, 5);
};

exports['toString'] = function (test) {
    test.equal(cx.create(3, 4).toString(), "3 + 4i");
    test.equal(cx.create(0, 0).toString(), "0 + 0i");
    test.equal(cx.create(1.2, 3.4).toString(), "1.2 + 3.4i");
};

