import {GameNumber} from "../../../src/fizzBuzz/forthPractice/GameNumber";
import {FizzBuzz} from "../../../src/fizzBuzz/forthPractice/FizzBuzz";

describe("GameNumber test", () => {
    it("should print 1-10 when given length 10", () => {
        const gameNumber = new GameNumber(10);
       expect(gameNumber.print()).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });
    it("should print 1-10 follow the fizzBuzz rules", () => {
        const fizzBuzz = new FizzBuzz();
        const gameNumber = new GameNumber(10, (num) => fizzBuzz.say(num));
        expect(gameNumber.print()).toEqual([1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz"]);
    });
});