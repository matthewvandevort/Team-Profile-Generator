const Manager = require('../lib/Manager');

const managerTest = new Manager ('Nick Fury', 1, 'furynick@gmail.com', 1, 'Manager');

describe('Manager', () => {
    it('has a name', () => {
        expect(managerTest.name).toEqual(expect.any(String));
        expect(managerTest.name.length).toBeGreaterThan(2);
    })

    it('has an email address', () => {
        expect(managerTest.email).toEqual(expect.stringContaining('@'));
    });

    it('has an id that is a number', () => {
        expect(managerTest.id).toEqual(expect.any(Number));
    });
    
    it('has an office number', () => {
        expect(managerTest.officeNumber).toEqual(expect.any(Number));
    });

    it('has a role of Manager', () => {
        expect(managerTest.getRole()).toBe('Manager');
    });

});