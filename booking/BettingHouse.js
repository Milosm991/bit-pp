class BettingHouse {
    constructor(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPLayers = 0;
    }

    addBettingPlace(place) {
        this.listOfBettingPlaces.push(place);
        this.numberOfPLayers += place.numberOfPLayers;

    }
    getData() {
        let res = '';
        this.listOfBettingPlaces.forEach((place) => {
            res += `\t` + place.getData() + `\n`;
            res += place.getListOfPlayers();
        })
        return `${this.competition}, ${this.listOfBettingPlaces.length} betting places, ${this.numberOfPLayers} bets 
${res}  `;
    }
}

module.exports = { BettingHouse }