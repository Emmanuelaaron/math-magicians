import calculate from '../../logic/calculate';

let myObj = {};
let myObj1 = {};
let myObj2 = {};
describe('Calculator testing', () => {
  beforeEach(() => {
    myObj = {
      total: 3,
      next: 1,
      operation: '+',
    };
    myObj1 = {
      total: 3,
      next: '0',
      operation: '+',
    };
    myObj2 = {
      total: 3,
      next: null,
      operation: '+',
    };
  });

  afterEach(() => {
    myObj = {};
    myObj1 = {};
    myObj2 = {};
  });
  it('returns 0 when AC button is clicked', () => {
    const res = calculate(myObj, 'AC');
    expect(res).toMatchSnapshot({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('returns the result if "=" is clicked', () => {
    const res = calculate(myObj, '=');
    expect(res).toMatchSnapshot({
      total: '4',
      next: null,
      operation: null,
    });
  });

  test("result of '+/-'", () => {
    const res = calculate(myObj, '+/-');
    expect(res).toMatchSnapshot({
      total: 3,
      next: '-1',
      operation: '+',
    });
  });

  test('if button is a number', () => {
    const res = calculate(myObj, '9');
    expect(res).toMatchSnapshot({
      total: 3,
      next: '19',
      operation: '+',
    });
  });

  test('if button is a 0 and next is 0 too', () => {
    const res = calculate(myObj1, '0');
    expect(res).toMatchSnapshot({});
  });

  test('if button is a 0 and next is 0 too', () => {
    const res = calculate(myObj2, '8');
    expect(res).toMatchSnapshot({});
  });

  test('if button is a .', () => {
    const res = calculate(myObj1, '.');
    expect(res).toMatchSnapshot({});
  });
});
