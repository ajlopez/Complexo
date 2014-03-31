
function ComplexNumber(re, img) {
    this.real = function () { return re; };
    
    this.imaginary = function () { return img; };
    
    this.add = function (cnumber) {
        return new ComplexNumber(re + cnumber.real(), img + cnumber.imaginary());
    };
    
    this.subtract = function (cnumber) {
        return new ComplexNumber(re - cnumber.real(), img - cnumber.imaginary());
    };
}

function create(re, img) {
    return new ComplexNumber(re, img);
}

module.exports = {
    create: create
};