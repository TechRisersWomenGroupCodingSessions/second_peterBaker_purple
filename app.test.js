const cake = require('./app');

test('Returns 2 as the amount of cakes that can be baked', () => {
    expect(cake({"flour": 100}, {"flour": 200})).toBe(2)
});