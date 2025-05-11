// find practice
// the main difference between filter and find is that filter returns an array of all elements that match the condition, while find returns the first element that matches the condition.
const taka = [100, 200, 300, 400, 500];
const findMoney = taka.find (amount => amount > 200);
console.log (findMoney);