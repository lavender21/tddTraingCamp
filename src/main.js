import { FizzBuzz } from "./fizzBuzz/forthPractice/FizzBuzz";
import { GameNumber } from "./fizzBuzz/forthPractice/GameNumber";

const fizzBuzz = new FizzBuzz();
const gameNumber = new GameNumber(100, (num) => fizzBuzz.say(num));
console.log(gameNumber.print());