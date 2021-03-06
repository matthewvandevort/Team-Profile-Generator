const Engineer = require('../lib/Engineer');

const engineerTest = new Engineer ('Tony Stark', 1, 'ironman@gmail.com', 'Engineer', 'tonystark');

describe('Engineer', () => {
    it('has a name', () => {
        expect(engineerTest.name).toEqual(expect.any(String));
        expect(engineerTest.name.length).toBeGreaterThan(2);
    })

    it('has an email address', () => {
        expect(engineerTest.email).toEqual(expect.stringContaining('@'));
    });

    it('has an id that is a number', () => {
        expect(engineerTest.id).toEqual(expect.any(Number));
    });

    it('has a role of Engineer', () => {
        expect(engineerTest.getRole()).toBe('Engineer');
    });

    it('has a GitHub username', () => {
        expect(engineerTest.gitHubUser).toEqual(expect.any(String));
    });
});