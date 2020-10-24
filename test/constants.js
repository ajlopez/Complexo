
var cx = require('..');

exports['zero'] = function (test) {
    var zero = cx.ZERO;
    
    test.equal(zero.real(), 0);
    test.equal(zero.imag(), 0);
};

exports['one'] = function (test) {
    var zero = cx.ONE;
    
    test.equal(zero.real(), 1);
    test.equal(zero.imag(), 0);
};

exports['i'] = function (test) {
    var i = cx.I;
    
    test.equal(i.real(), 0);
    test.equal(i.imag(), 1);
};

exports['-i'] = function (test) {
    var minusi = cx.MINUSI;
    
    test.equal(minusi.real(), 0);
    test.equal(minusi.imag(), -1);
};
