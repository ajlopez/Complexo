
var cx = require('..');

exports['create complex number'] = function (test) {
    var cnumber = cx.create(1, 2);
    
    test.ok(cnumber);
    test.equal(cnumber.real(), 1);
    test.equal(cnumber.imaginary(), 2);
};

