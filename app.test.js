const cake = require('./app');

// test('Returns 2 as the amount of cakes that can be baked', () => {
//     expect(cake({"flour": 100}, {"flour": 200})).toBe(2)
// });

// test('Returns 2 as the amount of cakes that can be baked', () => {
//     expect(cake({"flour": 100, "milk": 2}, {"flour": 200, "milk": 10})).toBe(2)
// });

// test('Returns 0 as the amount of cakes that can be baked', () => {
//     expect(cake({"flour": 100, "milk": 2}, {"milk": 10})).toBe(0)
// });

// test('Returns 0 as the amount of cakes that can be baked', () => {
//     expect(cake(
//         {"apples": 3, "flour": 300, "sugar": 150, "milk": 100, "oil": 100}, 
//         {"sugar": 500, "flour": 2000, "milk": 2000}))
//         .toBe(0)
// });

// test('Returns 2 as the amount of cakes that can be baked', () => {
//     expect(cake(
//         {"flour": 500, "sugar": 200, "eggs": 1}, 
//         {"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200}))
//         .toBe(2)
// });

test('Exception is raised when entering an invalid value', () => {
    expect(cake(
        {"flour": "one hundred", "milk": 2}, 
        {"flour": 200, "milk": 10}))
        .toThrow()
});