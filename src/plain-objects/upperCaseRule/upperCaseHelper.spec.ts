import { UpperCaseHelper } from './upperCaseHelper';

let upperCaseHelper;

beforeAll(() => {
  upperCaseHelper = new  UpperCaseHelper();
});

describe('one uppercase rule', () => {
  it('should fail when given no uppercase', () => {
    const result = upperCaseHelper.oneUpperCaseRule('abc');
    expect(result.passed).toEqual(false);
  });
  it('should pass when given one uppercase', () => {
    const result = upperCaseHelper.oneUpperCaseRule('Abc');
    expect(result.passed).toEqual(true);
  });
  it('should pass when given a different uppercase', () => {
    const result = upperCaseHelper.oneUpperCaseRule('aBc');
    expect(result.passed).toEqual(true);
  });
});
