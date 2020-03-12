class Address {
    constructor(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
    }

    getData() {
        return `${this.street} ${this.number}, ${this.postalCode} ${this.city}, ${this.country}`;
    }
}
module.exports = { Address }