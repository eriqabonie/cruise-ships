const Port = require('../src/port');

class Ship {
    constructor(currentPort) {

    this.currentPort = currentPort;
    this.passengers = 0;

    }

    board() {
        this.passengers += 1;
    }
    //didn't really understand the instructions here
    setSail() {
      
        if(this.passengers == 0) {
            this.currentPort;
        } else {
            this.currentPort == null;
        }
    
      }

      dock (port) {
          this.currentPort = port;
      }

}

module.exports = Ship;
