# Complexo

Simple complex numbers arithmetic operations.

## Installation

Via npm on Node:

```
npm install complexo
```

## Usage

Reference in your program:

```js
var cx = require('complexo');
```

Usage

```js
// create number 3 + 4i
var cnumber = cx.create(3, 4);
// toString
cnumber.toString(); // "3 + 4i"
// inverse
cnumber.inv();
// add to cnumber
var newcnumber = cnumber.add(cnumber2);
// subtract cnumber
newcnumber = cnumber.sub(cnumber2);
// multiply cnumber
newcnumber = cnumber.mult(cnumber2);
// divide cnumber
newcnumber = cnumber.div(cnumber2);
// conjugate
newcnumber = cnumber.conj();
```

## Development

```
git clone git://github.com/ajlopez/Complexo.git
cd Complexo
npm install
npm test
```

## Versions

- 0.0.1 Published

## Samples

TBD

## License

MIT

## Contribution

Feel free to [file issues](https://github.com/ajlopez/Complexo) and submit
[pull requests](https://github.com/ajlopez/Complexo/pulls) — contributions are
welcome<

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

