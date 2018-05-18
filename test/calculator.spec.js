import assert from 'assert';
import calculator from '../src/calculator';

describe('HelloWorld', () => {
  it('should return 0 for empty string', () => {
    // given
    const input = '';
    const expected = 0;

    // when
    const actual = calculator.add(input);

    // then
    assert.equal(actual, expected);
  });

  it('should return value for single number', () => {
    // given
    const input = '1';
    const expected = 1;

    // when
    const actual = calculator.add(input);

    // then
    assert.equal(actual, expected);
  });

  it('should return value for two numbers divided by delimiter', () => {
    // given
    const input = '1,2';
    const expected = 3;

    // when
    const actual = calculator.add(input);

    // then
    assert.equal(actual, expected);
  });

  it('should return value for two numbers divided by delimiter', () => {
    // given
    const input = '1,2,25,50,10';
    const expected = 88;

    // when
    const actual = calculator.add(input);

    // then
    assert.equal(actual, expected);
  });

  it('should return value for two numbers divided by different delimiter', () => {
    // given
    const input = '1\n2,25';
    const expected = 28;

    // when
    const actual = calculator.add(input);

    // then
    assert.equal(actual, expected);
  });

  it('should support custom delimiters', () => {
    // given
    const input = '//;\n1;2';
    const expected = 3;

    // when
    const actual = calculator.add(input);

    // then
    assert.equal(actual, expected);
  });

  it('should throw when negatives are passed down', () => {
    // given
    const input = '1,-2, -3';
    const expected = 'Negatives not supported -2,-3';

    // when
    const addingNegatives = () => calculator.add(input);

    // then
    assert.throws(addingNegatives, expected);
  });

  it('should throw when negatives are passed down', () => {
    // given
    const input = '1,-2, -3';
    const expected = 'Negatives not supported -2,-3';

    // when
    const addingNegatives = () => calculator.add(input);

    // then
    assert.throws(addingNegatives, expected);
  });
});
