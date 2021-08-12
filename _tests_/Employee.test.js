
const Employee = require ('../lib/Employee');


const employeeTest = new Employee ('Matthew',  1, 'vandevortmatthew@gmail.com', 'Employee');

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
        expect(employeeTest.getRole()).toBe('Employee');
    });
});

