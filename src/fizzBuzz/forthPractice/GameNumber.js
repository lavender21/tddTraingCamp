export class GameNumber {
    constructor(length, rule) {
        this.numbers = Array.from({length}, (number, index) => {
            return rule ? rule(index + 1) : index + 1;
        });
    }

    print() {
        return this.numbers;
    }
}