`use strict`;
(function () {
    const CONTINENT = Object.freeze({
        EUROPE: `EU`,
        AFRICA: `AF`,
        ASIA: `AS`,
        SOUTHAMERICA: `SA`,
        NORTHAMERICA: `NA`,
        AUSTRALIA: `AU`,
    });
    ////////////////CONST FUNCTION COUNTRY//////////////
    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }
    ////////////////CONST FUNCTION PERSON//////////////////
    function Person(name, surname, dateOfbirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfbirth = new Date(dateOfbirth);
    }
    Person.prototype.getData = function () {
        return `${this.name} ${this.surname} ${this.dateOfbirth.getDate()}, ${this.dateOfbirth.getMonth()},${this.dateOfbirth.getFullYear()}`;
    }
    /////////////////////CONST FUNCTION PLAYER////////////////
    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;

    }

    Player.prototype.getData = function () {
        let date = new Date();
        let res = date.getFullYear() - this.person.dateOfbirth.getFullYear();
        return `${this.country.name.slice(0, 2).toUpperCase()}, ${this.betAmount * this.country.odds} eur, ${this.person.name} ${this.person.surname}, ${res} years\n`;
    }

    //////////////////////CONST FUNCTION ADDRESS/////////////////
    function Address(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
    }

    Address.prototype.getData = function () {
        return `${this.street} ${this.number}, ${this.postalCode} ${this.city}, ${this.country}`;
    }
    ///////////////CONST FUNCTION BETTING PLACE///////////////
    function BettingPlace(address) {
        this.address = address;
        this.listOfPLayers = [];
        this.numberOfPLayers = 0;
    }

    BettingPlace.prototype.addPlayer = function (igrac) {
        this.listOfPLayers.push(igrac);
        this.numberOfPLayers++;
    }
    BettingPlace.prototype.getData = function () {
        let res = 0;
        this.listOfPLayers.forEach((amount) => {
            res += amount.betAmount;
        })

        return `${this.address.street}, ${this.address.postalCode}, ${this.address.city}, sum of all bets:${res} eur  `;
    }
    BettingPlace.prototype.getListOfPlayers = function () {
        let players = '';
        this.listOfPLayers.forEach((player) => {
            players += `\t\t` + player.getData();
        })
        return players
    }
    ///////////////CONST FUNCTION BETTING HOUSE////////////
    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPLayers = 0;
    }

    BettingHouse.prototype.addBettingPlace = function (place) {
        this.listOfBettingPlaces.push(place);
        this.numberOfPLayers += place.numberOfPLayers;

    }
    BettingHouse.prototype.getData = function () {
        let res = '';
        this.listOfBettingPlaces.forEach((place) => {
            res += `\t` + place.getData() + `\n`;
            res += place.getListOfPlayers();
        })
        return `${this.competition}, ${this.listOfBettingPlaces.length} betting places, ${this.numberOfPLayers} bets 
 ${res}  `;
    }

    /////////////////////////////////////
    const personOne = new Person(`Milos`, `Manojlovic`, `05/24/1991`);
    const personTwo = new Person(`Veljko`, `Bugaric`, `05/24/1991`);
    const personThree = new Person(`Stefan`, `Stefanovic`, `05/24/1991`);
    const personFour = new Person(`Nenad`, `Dimitrijevic`, `05/24/1991`);
    // console.log(personOne.getData());

    const firstAddress = new Address(`RS`, `Belgrade`, 11070, `Jurija Gagarina`, 102);
    const secondAddres = new Address(`RS`, `Belgrade`, 11070, `Omladinskih Brigada`, 88);
    // console.log(firstAddress.getData());

    const drzava = new Country(`Serbia`, 70, CONTINENT.EUROPE);
    const drzava2 = new Country(`Argentina`, 10, CONTINENT.SOUTHAMERICA);
    const drzava3 = new Country(`Australia`, 150, CONTINENT.AUSTRALIA);
    const drzava4 = new Country(`Italy`, 15, CONTINENT.EUROPE);
    // console.log(drzava);

    const igrac1 = new Player(personOne, 500, drzava);
    const igrac2 = new Player(personTwo, 50, drzava2);
    const igrac3 = new Player(personThree, 100, drzava3);
    const igrac4 = new Player(personFour, 200, drzava4);
    // console.log(igrac1.getData());

    const betPlace = new BettingPlace(firstAddress);
    betPlace.addPlayer(igrac1);
    betPlace.addPlayer(igrac2);

    const newBetPlace = new BettingPlace(secondAddres);
    newBetPlace.addPlayer(igrac3);
    newBetPlace.addPlayer(igrac4);
    // console.log(betPlace.getData());

    const betHouse = new BettingHouse(`World cup winner`);
    betHouse.addBettingPlace(betPlace);
    betHouse.addBettingPlace(newBetPlace);
    console.log(betHouse.getData());


    console.log("Hello world");

    // console.log(betHouse);




    // var createPlayer = function(person, betAmount, country){
    //     return new Player(person, betAmount, country)
    // }
    // var igrac1 = createPlayer(personOne, 500, drzava); 
    // var igrac2 = createPlayer(personTwo, 800, drzava); 
    // var igrac3 = createPlayer(personThree, 50, drzava); 
    // var igrac4 = createPlayer(personFour, 100, drzava); 










})();