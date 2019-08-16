export class FizzBuzz {
    constructor(number) {
        this.number = parseInt(number);
    }

    say() {
        if (this.isDivided(3) && this.isDivided(5)) {
            return "FizzBuzz";
        }
        if (this.isDivided(3)) {
            return "Fizz";
        }
        if (this.isDivided(5)) {
            return "Buzz";
        }
        return this.number.toString();
    }

    isDivided(value) {
        return this.number % value === 0;
    }
}