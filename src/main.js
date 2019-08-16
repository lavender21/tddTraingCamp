import {FizzBuzz} from "./fizzBuzz/secondPractice/FizzBuzz";
import {GameNumber} from "./fizzBuzz/forthPractice/GameNumber";

const fizzBuzzRule = (num) => new FizzBuzz().say(num);
const gameNumber = new GameNumber(100, fizzBuzzRule);
console.log(gameNumber.print());