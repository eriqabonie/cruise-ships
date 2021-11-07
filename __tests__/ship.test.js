/* globals describe it expect */
const Ship = require('../src/ship');
const Port = require('../src/port');

describe('Ship', () => {

    it('this should create a new cruise ship object', () => {
        
      // const ship = new Ship ('boatyMcBoat');

        expect(new Ship()).toBeInstanceOf(Object);
    });

   /*  it('this should set the name property', () => {
        
        const ship = new Ship ('boatyMcBoat');
  
        expect(ship.shipName).toBe('boatyMcBoat');
      }); */

    it('has a starting port', () => {
      
        const port = new Port('Dover');
        const ship = new Ship (port);
      
        expect(ship.currentPort).toBe(port);
    });



    it('has initial passenger number of 0', () => {
    
        const port = new Port('Dover');
        const ship = new Ship (port);

        expect(ship.passengers).toBe(0);
    });


    it('can board passengers onto ship ', () => {

        const port = new Port('Dover');
        const ship = new Ship (port);
        ship.board();

        expect(ship.passengers).toBe(1);
    });

    //this one doesn't make sense
    xit('ship can set sail ', () => {

        port = new Port ('Dover');
        const ship = new Ship (port);
        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    });

    it('ship can dock at a different port ', () => {

        const dover = new Port ('Dover');
        const ship = new Ship (dover);

        const calais = new Port ('Calais');
        ship.dock(calais);

        expect(ship.currentPort).toBe(calais);
    });

    
});

