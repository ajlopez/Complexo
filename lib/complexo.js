
function ComplexNumber(re, img) {
    this.real = function () { return re; };
    
    this.imag = function () { return img; };
    
    this.abs = function () { return Math.sqrt(re * re + img * img); };
    
    this.conj = function () {
        return new ComplexNumber(re, -img);
    };
    
    this.inv = function () {
        const div = re * re + img * img;
        
        return new ComplexNumber(re / div, -img / div);
    };
    
    this.toString = function () {
        return re.toString() + " + " + img.toString() + "i";
    };
    
    this.add = function (number) {
        if (number instanceof ComplexNumber)
            return new ComplexNumber(re + number.real(), img + number.imag());
        
        return new ComplexNumber(re + number, img);
    };
    
    this.sub = function (number) {
        if (number instanceof ComplexNumber)
            return new ComplexNumber(re - number.real(), img - number.imag());

        return new ComplexNumber(re - number, img);
    };
    
    this.mult = function (number) {
        if (number instanceof ComplexNumber)
            return new ComplexNumber(re * number.real() - img * number.imag(), re * number.imag() + img * number.real());
    
        return new ComplexNumber(re * number, img * number);
    };
    
    this.div = function (number) {
        if (number instanceof ComplexNumber)
            return this.mult(number.inv());
        
        return new ComplexNumber(re / number, img / number);
    };
}

function createComplexNumber(re, img) {
    return new ComplexNumber(re, img);
}

module.exports = {
    complex: createComplexNumber,
    ZERO: createComplexNumber(0, 0),
    ONE: createComplexNumber(1, 0),
    I: createComplexNumber(0, 1),
    MINUSI: createComplexNumber(0, -1)
};

