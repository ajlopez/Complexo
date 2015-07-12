
function ComplexNumber(re, img) {
    this.real = function () { return re; };
    
    this.imag = function () { return img; };
    
    this.abs = function () { return Math.sqrt(re * re + img * img); };
    
    this.conj = function () {
        return new ComplexNumber(re, -img);
    };
    
    this.inv = function () {
        var div = re * re + img * img;
        
        return new ComplexNumber(re / div, -img / div);
    };
    
    this.toString = function () {
        return re.toString() + " + " + img.toString() + "i";
    };
    
    this.add = function (cnumber) {
        return new ComplexNumber(re + cnumber.real(), img + cnumber.imag());
    };
    
    this.sub = function (cnumber) {
        return new ComplexNumber(re - cnumber.real(), img - cnumber.imag());
    };
    
    this.mult = function (cnumber) {
        return new ComplexNumber(re * cnumber.real() - img * cnumber.imag(), re * cnumber.imag() + img * cnumber.real());
    };
    
    this.div = function (cnumber) {
        return this.mult(cnumber.inv());
    };
}

function create(re, img) {
    return new ComplexNumber(re, img);
}

module.exports = {
    create: create,
    ZERO: create(0, 0),
    ONE: create(1, 0),
    I: create(0, 1)
};