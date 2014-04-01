
function ComplexNumber(re, img) {
    this.real = function () { return re; };
    
    this.imag = function () { return img; };
    
    this.abs = function () { return Math.sqrt(re * re + img * img); };
    
    this.add = function (cnumber) {
        return new ComplexNumber(re + cnumber.real(), img + cnumber.imag());
    };
    
    this.sub = function (cnumber) {
        return new ComplexNumber(re - cnumber.real(), img - cnumber.imag());
    };
    
    this.mult = function (cnumber) {
        return new ComplexNumber(re * cnumber.real() - img * cnumber.imag(), re * cnumber.imag() + img * cnumber.real());
    };
}

function create(re, img) {
    return new ComplexNumber(re, img);
}

module.exports = {
    create: create
};