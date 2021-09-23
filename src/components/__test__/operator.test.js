import operate from '../../logic/operate';

describe('Testing the maths operators', () => {
  it('Should return the sum of the result of the two two numbers passed', () => {
    const result = operate(5, 5, '+');
    expect(result).toBe('10');
  });
  it('Should return the difference of the two numbers passed', () => {
    const result = operate(20, 15, '-');
    expect(result).toBe('5');
  });
  it('Should return the product of the two numbers passed', () => {
    const result = operate(5, 5, 'x');
    expect(result).toBe('25');
  });
  it('Should return 5 from the division operation', () => {
    const result = operate(25, 5, '÷');
    expect(result).toBe('5');
  });
  it('Should return the remainder of the two numbers when the numerator is divided by the denominator', () => {
    const result = operate(13, 5, '%');
    expect(result).toBe('3');
  });
  it('Should return an error message if given a wrong operator', () => {
    expect(() => {
      operate(1, 2, 'j');
    }).toThrow('Unknown operation \'j\'');
  });
  it('Should print an error if a wrong number is given', () => {
    expect(() => {
      operate('t', 10, '-');
    }).toThrow('[big.js] Invalid number');
  });
});
