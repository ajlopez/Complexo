
function ComplexNumber(re, img) {
    this.real = function () { return re; };
    this.imaginary = function () { return img; };
}

function create(re, img) {
    return new ComplexNumber(re, img);
}

module.exports = {
    create: create
};