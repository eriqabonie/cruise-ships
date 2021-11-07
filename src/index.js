function Ship (shipName) {
    
   // this.shipName = shipName;
    this.passengers = 0;
    this.startingPort = 'Cancun';
    this.setSail = false;
}


Ship.prototype.board = function () {

    this.passengers += 1;
}

Ship.prototype.setSail = function setSail() {

    this.startingPort = '';
    this.setSail == true;
}

const ship = new Ship ('boatyMcBoat');