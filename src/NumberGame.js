import { FizzBuzz } from "./FizzBuzz";

export class NumberGame {
    constructor(length) {
        this.arr = Array.from({length}, (v, i) => i + 1);
    }

    print() {
        return this.arr.map(item => {
            const fizzBuzz = new FizzBuzz(item);
            return fizzBuzz.say();
        }).join('\n');
    }
}