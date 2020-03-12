class Person {
    constructor(name, surname, dateOfbirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfbirth = new Date(dateOfbirth);
    }
    getData() {
        return `${this.name} ${this.surname} ${this.dateOfbirth.getDate()}, ${this.dateOfbirth.getMonth()},${this.dateOfbirth.getFullYear()}`;
    }
}
module.exports = { Person }