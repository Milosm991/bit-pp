`use strict`;
const { Country } = require("./Country.js");
const { Person } = require("./Person.js");
const { Player } = require("./Player.js");
const { Address } = require("./Address");
const { BettingPlace } = require("./BettingPlace.js");
const { BettingHouse } = require("./BettingHouse.js");
const { CONTINENT } = require("./Continent.js");


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
const drzava3 = new Country(`Australia`, 15, CONTINENT.AUSTRALIA);
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










