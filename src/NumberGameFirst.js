export class NumberGame {
    constructor(number) {
        this.number = number;
    }

    isDivided(value) {
        return this.number % value === 0;
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
        return this.number;
    }

    print() {
        this.number = 1;
        const arr = [];
        while(this.number <= 100) {
            arr.push(this.say());
            this.number++
        }
        return arr.join(', ');
    }
}