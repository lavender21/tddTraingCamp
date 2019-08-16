import { FizzBuzz } from "../../src/thirdPractice/FizzBuzz";

describe('Test FizzBuzz rules',() => {
    it('should return number 1 when input number 1',() => {
        expectFizzBuzz(1, 1);
    });

    it('should return Fizz when input number is 3',() => {
        expectFizzBuzz(3, 'Fizz');
    });

    it('should return Fizz when input number is 13',() => {
        expectFizzBuzz(13, 'Fizz');
    });

    it('should return Buzz when input number is 5',() => {
        expectFizzBuzz(5, 'Buzz');
    });
    // 是3的倍数但是包含5？ 是5的倍数包含3？
    it('should return Buzz when input number is 52',() => {
        expectFizzBuzz(52, 'Buzz');
    });
    it('should return FizzBuzz when input number is 15',() => {
        expectFizzBuzz(15, 'FizzBuzz');
    });
});

function expectFizzBuzz(input, expected) {
    const fizzBuzz = new FizzBuzz(input);
    expect(fizzBuzz.say()).toBe(expected);
}
