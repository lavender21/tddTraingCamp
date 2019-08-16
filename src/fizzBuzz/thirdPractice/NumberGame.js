import { FizzBuzz } from "./FizzBuzz";

export class NumberGame {
    constructor(length) {
        this.array = Array.from({length}, (x,i) => i + 1);
    }

    print() {
        return this.array.join(' ');
    }

    printFizzBuzz() {
        return this.array
        .map(number => new FizzBuzz(number).say())
        .join(' ');
    }
}