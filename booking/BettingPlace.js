class BettingPlace {
    constructor(address) {
        this.address = address;
        this.listOfPLayers = [];
        this.numberOfPLayers = 0;
    }

    addPlayer(igrac) {
        this.listOfPLayers.push(igrac);
        this.numberOfPLayers++;
    }
    getData() {
        let res = 0;
        this.listOfPLayers.forEach((amount) => {
            res += amount.betAmount;
        })

        return `${this.address.street}, ${this.address.postalCode}, ${this.address.city}, sum of all bets:${res} eur  `;
    }
    getListOfPlayers() {
        let players = '';
        this.listOfPLayers.forEach((player) => {
            players += `\t\t` + player.getData();
        })
        return players
    }
}
module.exports = { BettingPlace }