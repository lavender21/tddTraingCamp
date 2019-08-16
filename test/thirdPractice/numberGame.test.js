import { NumberGame } from "../../src/thirdPractice/NumberGame";

describe('test numberGame rule',() => {
    it('print 1 - 20',() => {
        const numberGame = new NumberGame(20);
        expect(numberGame.print()).toBe("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20");
    });
    it('print 1,2,Fizz,4,Buzz.. ', () => {
        const numberGame = new NumberGame(20);
        expect(numberGame.printFizzBuzz()).toBe(
            "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz Fizz 14 FizzBuzz 16 17 Fizz 19 Buzz");
    });
});