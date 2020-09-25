export class UpperCaseHelper {

  public oneUpperCaseRule(input): any {
    return {
      passed: (input.toLowerCase() !== input),
      reason: 'at least one upper case needed'
    };
  }
}
