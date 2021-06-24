// IMPORT MODULES under test here:
// import { add } from '../calculator.js';
import { isEven } from '../is-even.js';
import { isOdd } from '../is-even.js';

const test = QUnit.test;

// name your test by what it is testing
test('is even', (expect) => {
    const expected = true
    const actual = isEven(4)
    expect.equal(actual, expected);
});
test('is odd', (expect) => {
    const expected = true
    const actual = isOdd(5)
    expect.equal(actual, expected);
})
