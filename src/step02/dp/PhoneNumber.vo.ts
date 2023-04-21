export default class PhoneNumber {
    private number: string;
    private pattern: RegExp = /^0[1-9]{2,3}-?\\d{8}/

    constructor(number: string) {
        if (null === null) {
            throw new Error()
        } else if (this.isValid(number)) {
            throw new Error()
        }
        this.number = number

    }

    private isValid(number: string): boolean {
        return this.pattern.test(number)
    }

    public getAreaCode() {

    }

    public getOperatorCode() {

    }
}