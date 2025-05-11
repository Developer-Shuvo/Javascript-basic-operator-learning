// Repeat of all things what i have learned in this course

//  1. map
//  2. for each
//  3. filter
//  4. find
//  5. reduce


const products = [

    {id: 1, Brand: 'Apple', price: 150000,},
    {id: 2, Brand: 'Dell', price: 50000,},
    {id: 3, Brand: 'Lenovo', price: 60000,},
    {id: 4, Brand: 'Asus', price: 70000,},
    {id: 5, Brand: 'HP', price: 80000,},

]


// 1. map
const names = products.map (items => items.Brand);
const prices = products.map (items => items.price);
// console.log (names);      // example
// console.log (prices);        // example
// console.log (prices[0]);   // example

// 2. for each
products.forEach (items => console.log (items.Brand));


// 3.filter
const filter = products.filter (items => items.price >50000);
// console.log (filter);


// 4. find
const find = products.find (items => items.Brand === 'Apple');
// console.log (find);

// 5. reduce
const reduce =  products.reduce ((accumulator, currentValue) =>accumulator + currentValue.price, 0);
console.log ('Reduce Result is : =', reduce);