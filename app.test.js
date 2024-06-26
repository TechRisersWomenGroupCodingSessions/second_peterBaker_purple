const baker = require('./app');

test('Returns 2 as the amount of cakes that can be baked', () => {
    expect(baker()).toBe(2)
});