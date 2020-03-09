"use strict";
(function () {
    var CONTINENT = Object.freeze({
        EUROPE: "EU",
        AFRICA: "AF",
        ASIA: "AS",
        SOUTHAMERICA: "SA",
        NORTHAMERICA: "NA",
        AUSTRALIA: "AU",
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
        return this.name + " " + this.surname + " " + this.dateOfbirth.getDate() + "." + this.dateOfbirth.getMonth() + "." + this.dateOfbirth.getFullYear();
    }
/////////////////////CONST FUNCTION PLAYER////////////////
    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;

    }

    Player.prototype.getData = function () {
        var date = new Date();
        var res = date.getFullYear() - this.person.dateOfbirth.getFullYear();
        return this.betAmount * this.country.odds + " eur, " + this.person.name + " " + this.person.surname + ", " + res + " years";
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
        return this.street + " " + this.number +  ",  " + this.postalCode + " " + this.city + ",  " + this.country;
    }
///////////////CONST FUNCTION BETTING PLACE///////////////
    function BettingPlace(address) {
        this.address = address;
        this.listOfPLayers = [];
    }

    BettingPlace.prototype.addPlayer = function(igrac){
        this.listOfPLayers.push(igrac);
    }
    BettingPlace.prototype.getData = function(){
        var res =0;
        for(var i=0; i<this.listOfPLayers.length; i++){
            res += this.listOfPLayers[i].betAmount;
        }
        return this.address.street + ", " + this.address.postalCode + ", " + this.address.city + ", sum of all bets: " + res + "eur" +"\n";
    }
///////////////CONST FUNCTION BETTING HOUSE////////////
    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPLayers = 0;
    }

    BettingHouse.prototype.addBettingPlace = function(place){
        this.listOfBettingPlaces.push(place);
    }
    BettingHouse.prototype.getData = function(){
        var res ='';
        var str=" ";
        for(var i=0; i<this.listOfBettingPlaces.length; i++){
            res += this.listOfBettingPlaces[i].getData();
            for(var j=0; j<this.listOfBettingPlaces[i].listOfPLayers.length; j++){
                
                str += this.listOfBettingPlaces[i].listOfPLayers[j].getData();
            }
        }
        return this.competition + ", " + this.listOfBettingPlaces.length + " betting places, " + 4 + " bets" + "\n" + res + "\n" + str ;
    }


/////////////////////////////////////
    var personOne = new Person("Milos", "Manojlovic", "05/24/1991");
    var personTwo = new Person("Veljko", "Bugaric", "05/24/1991");
    var personThree = new Person("Stefan", "Stefanovic", "05/24/1991");
    var personFour = new Person("Nenad", "Dimitrijevic", "05/24/1991");
    // console.log(personOne.getData());

    var firstAddress = new Address("RS", "Belgrade", 11070, "Jurija Gagarina", 102);
    var secondAddres = new Address("RS", "Belgrade", 11070, "Omladinskih Brigada", 88);
    // console.log(firstAddress.getData());
    
    var drzava = new Country("Serbia", 70, CONTINENT.EUROPE);
    var drzava2 = new Country("Argentina", 10, CONTINENT.SOUTHAMERICA);
    var drzava3 = new Country("Australia", 150, CONTINENT.AUSTRALIA);
    var drzava4 = new Country("Italy", 15, CONTINENT.EUROPE);
    // console.log(drzava);
    
    var igrac1 = new Player(personOne, 500, drzava);    
    var igrac2 = new Player(personTwo, 50, drzava2);    
    var igrac3 = new Player(personThree, 100, drzava3);    
    var igrac4 = new Player(personFour, 200, drzava4);    
    // console.log(igrac1.getData());
    
    var betPlace = new BettingPlace(firstAddress);
    betPlace.addPlayer(igrac1);
    betPlace.addPlayer(igrac2);

    var newBetPlace = new BettingPlace(secondAddres);
    newBetPlace.addPlayer(igrac3);
    newBetPlace.addPlayer(igrac4);
    console.log(betPlace.getData());
    
    var betHouse = new BettingHouse("World cup winner");
    betHouse.addBettingPlace(betPlace);
    betHouse.addBettingPlace(newBetPlace);
    console.log(betHouse.getData());
    



    // var createPlayer = function(person, betAmount, country){
    //     return new Player(person, betAmount, country)
    // }
    // var igrac1 = createPlayer(personOne, 500, drzava); 
    // var igrac2 = createPlayer(personTwo, 800, drzava); 
    // var igrac3 = createPlayer(personThree, 50, drzava); 
    // var igrac4 = createPlayer(personFour, 100, drzava); 










})();