const numbers = [50, 500, 585,473,66,333,999,303,585,55,44,99,88,654,];
const filterNumbers = numbers.filter (num => num > 500);
// console.log (filterNumbers);


const friends = ['Shuvo', 'Hamim', 'Urman', 'Vikram', 'Opu'];
const filterFriends = friends.filter (friend => friend.length > 4);
// console.log (filterFriends);





// Filter Vowels
// const name = 'Bangladesh is a beautiful country';
const name = 'Bangladesh is a beautiful country';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const filterVowels = name.split ('').filter
 (special => vowels.includes (special));
console.log (filterVowels);
