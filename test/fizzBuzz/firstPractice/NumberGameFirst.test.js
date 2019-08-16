
import {NumberGame} from "../../../src/fizzBuzz/firstPractice/NumberGameFirst";

const expectNumber = (value, expected) => {
    const numberGame = new NumberGame(value);
    expect(numberGame.say()).toBe(expected);
}

describe('Number Game', () => {
    it('should return Fizz when input is 3', () => {
        expectNumber(3, "Fizz");
    });
    it('should return Buzz when input is 5', () => {
        expectNumber(5, "Buzz");
    });
    it('should return FizzBuzz when input is 15', () => {
        expectNumber(15, "FizzBuzz");
    });
    it('should return 1-100 with 3 divided is Fizz, 5 divided is Buzz, 3 & 5 divided is FizzBuzz', () => {
        const numberGame = new NumberGame();
        expect(numberGame.print()).toBe("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz," +
        " 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, 31, 32, Fizz, 34, Buzz, Fizz, " +
        "37, 38, Fizz, Buzz, 41, Fizz, 43, 44, FizzBuzz, 46, 47, Fizz, 49, Buzz, Fizz, 52, 53, Fizz, Buzz, 56, Fizz, 58, 59,"+
        " FizzBuzz, 61, 62, Fizz, 64, Buzz, Fizz, 67, 68, Fizz, Buzz, 71, Fizz, 73, 74, FizzBuzz, 76, 77, Fizz, 79, Buzz, Fizz, 82, "+
        "83, Fizz, Buzz, 86, Fizz, 88, 89, FizzBuzz, 91, 92, Fizz, 94, Buzz, Fizz, 97, 98, Fizz, Buzz");
    })
})