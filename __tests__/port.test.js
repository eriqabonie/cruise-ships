/* globals describe it expect */
//const Ship = require('../src/ship');
const Port = require('../src/port');

describe('Port', () => {
    it('Port object can be instantiated. ', () => {

        expect(new Port()).toBeInstanceOf(Object);
    
    });
        

    it('Port has name property ', () => {
    
        const port = new Port('Cancun');

        expect(port.portName).toBe('Cancun');

    });

});