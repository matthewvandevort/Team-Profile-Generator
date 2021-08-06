const Intern = require('../lib/Intern');

const internTest = new Intern ('Peter Parker', 'spidey@gmail.com', 4, 'Intern', 'Empire State U');

describe('Intern', () => {
    it('has a name', () => {
        expect(internTest.name).toEqual(expect.any(String));
        expect(internTest.name.length).toBeGreaterThan(2);
    })

    it('has an email address', () => {
        expect(internTest.email).toEqual(expect.stringContaining('@'));
    });

    it('has an id that is a number', () => {
        expect(internTest.id).toEqual(expect.any(Number));
    });

    it('has a role of Intern', () => {
        expect(internTest.getRole()).toBe('Intern');
    });

    it('has a school name', () => {
        expect(internTest.schoolName).toEqual(expect.any(String));
    });
});