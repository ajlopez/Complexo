
var cx = require('..');

exports['create complex number'] = function (test) {
    var cnumber = cx.create(1, 2);
    
    test.ok(cnumber);
    test.equal(cnumber.real(), 1);
    test.equal(cnumber.imaginary(), 2);
};

exports['add two complex numbers'] = function (test) {
    var cnumber1 = cx.create(1, 2);
    var cnumber2 = cx.create(3, 4);
    
    var result = cnumber1.add(cnumber2);
    
    test.ok(result);
    test.equal(result.real(), 4);
    test.equal(result.imaginary(), 6);
};

exports['subtract two complex numbers'] = function (test) {
    var cnumber1 = cx.create(1, 2);
    var cnumber2 = cx.create(3, 7);
    
    var result = cnumber1.subtract(cnumber2);
    
    test.ok(result);
    test.equal(result.real(), -2);
    test.equal(result.imaginary(), -5);
};