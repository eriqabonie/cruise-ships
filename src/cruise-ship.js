function Ship (shipName) {
    
    this.shipName = shipName;
    this.passengers = 0;
    this.startingPort = 'Cancun';
}


Ship.prototype.board = function () {

    this.passengers += 1;
}


module.exports = Ship;