export class FizzBuzz {
    say(number) {
        if(this.isValidFizzBuzz(number)) {
            return "FizzBuzz";
        }
        if (this.isNumRelated(number, 3)) {
            return "Fizz";
        }
        if (this.isNumRelated(number, 5)) {
            return "Buzz";
        }
        return number;
    }

    isValidFizzBuzz(number) {
        return this.isNumDividedBy(number, 15) ||
            this.isNumDividedBy(number, 3) && this.isNumContain(number, 5) ||
            this.isNumDividedBy(number, 5) && this.isNumContain(number, 3);
    }

    isNumRelated(number, base) {
        return this.isNumDividedBy(number, base) || this.isNumContain(number, base);
    }

    isNumContain(number, base) {
        return number.toString().match(base);
    }

    isNumDividedBy(number, base) {
        return number % base === 0;
    }
}
