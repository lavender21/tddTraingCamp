
export class FizzBuzz {
    constructor(number) {
        this.number = number;
    }
    say() {
        if (this.isDivided(15)) {
            return "FizzBuzz";
        }
        if (this.isRelated(3)) {
            return "Fizz";
        }
        if (this.isRelated(5)) {
            return "Buzz";
        }
        return this.number;
    }

    isDivided(baseNumber) {
        return this.number % baseNumber === 0;
    }

    isRelated(baseNumber) {
        return this.isDivided(baseNumber) || this.number.toString().match(baseNumber);
    }
}