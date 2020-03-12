class Player {
    constructor(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
    }


    getData() {
        let date = new Date();
        let res = date.getFullYear() - this.person.dateOfbirth.getFullYear();
        return `${this.country.name.slice(0, 2).toUpperCase()}, ${this.betAmount * this.country.odds} eur, ${this.person.name} ${this.person.surname}, ${res} years\n`;
    }
}
module.exports = { Player };