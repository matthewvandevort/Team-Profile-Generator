
const Employee = require ('../lib/Employee');


const employeeTest = new Employee ('Matthew', 'vandevortmatthew@gmail.com', 1, 'Employee');

describe('Employee', () => {
    it('has a name', () => {
        expect(employeeTest.name).toEqual(expect.any(String));
        expect(employeeTest.name.length).toBeGreaterThan(2);
    });

    it('has an email address', () => {
        expect(employeeTest.email).toEqual(expect.stringContaining('@'));
    });

    it('has an id that is a number', () => {
        expect(employeeTest.id).toEqual(expect.any(Number));
    });

    it('has a role of Employee', () => {
        expect(employeeTest.retriveRole()).toBe('Employee');
    });
});

