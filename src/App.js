import React from 'react';
import './App.css';

const App = () =>  {

  let arr = ["I", "study", "JavaScript"];
  arr.splice(1,1)
  console.log('arr.splice(1,1)',arr);

  let arr2 = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr2.splice(0, 2);

console.log("removed",removed); // "I", "study" <-- array of removed elements
console.log("remained",arr2);

let arr4 = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr4.splice(2, 0, "complex", "language");

console.log(arr4); // "I", "study", "complex", "language", "JavaScript"

//arr.splice(index[, deleteCount, elem1, ..., elemN])
/*
It starts from the position index: 
removes deleteCount elements and then inserts elem1, ..., elemN 
at their place. 
Returns the array of removed elements.
*/

let arr5 = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr5.splice(-1, 0, 3, 4);

console.log(arr5); // 1,2,3,4,5

//slice
//arr.slice([start], [end])

let arr6 = ["t", "e", "s", "t"];
console.log("arr6",arr6);
console.log("arr6.slice(1,3)",arr6.slice(1, 3) ); // e,s (copy from 1 to 3)

console.log("arr6.slice(-2)",arr6.slice(-2) ); // s,t (copy from -2 till the end)


//concat
//arr.concat(arg1, arg2...)
/*
It returns a new array copying to it all items from index start to end 
(not including end). Both start and end can be negative, 
in that case position from array end is assumed.
*/

let arr7 = [1, 2];

console.log("arr7",arr7);

// create an array from: arr and [3,4]
console.log(arr7.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log(arr7.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log(arr7.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

let arr8 = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

console.log(arr8.concat(arrayLike)); // 1,2,[object Object]

let arr9 = [1, 2];

let arrayLike9 = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log(arr9.concat(arrayLike9) ); // 1,2,something,else


//forEach
/*
The arr.forEach method allows to run a function for every element of the array.

The syntax:
arr.forEach((item,index,array) => )
//do something
*/

let arr10 = [1, 2];

let arrayLike10 = {
  0: "something",
  length: 1
};

console.log(arr10.concat(arrayLike10) ); // 1,2,[object Object]
// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(item => console.log("foreach item",item));

/*
…But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead:
*/

let arr11 = [1, 2];

let arrayLike11 = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log(arr11.concat(arrayLike11) ); // 1,2,something,else

//showing index of element with forEach
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});


//Searching in array
/*
Now let’s cover methods that search in an array.

indexOf/lastIndexOf and includes
The methods arr.indexOf, arr.lastIndexOf and arr.includes have the same syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
arr.lastIndexOf(item, from) – same, but looks for from right to left.
arr.includes(item, from) – looks for item starting from index from, returns true if found.
*/

let arr12 = [1, 0, false];

console.log(arr12.indexOf(0) ); // 1
console.log(arr12.indexOf(false) ); // 2
console.log( arr12.indexOf(null) ); // -1

console.log( arr12.includes(1) ); // true

//find and findIndex
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

console.log(user.name); // John
console.log(users.findIndex(item => item.id == 2));

//filter
/*
let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});
*/

let users2 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users2.filter(user => user.id < 3)

console.log(someUsers);

//Transform an array
//map

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6

//sort(fn)
// [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//   alert( a + " <> " + b );
// });

//reverse
let arr13 = [1, 2, 3, 4, 5];
arr13.reverse();

console.log(arr13 ); // 5,4,3,2,1

//split and join
let names = 'Bilbo, Gandalf, Nazgul';

let arr14 = names.split(', ');

for (let name of arr14) {
  console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}

let arr15 = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

console.log(arr15); // Bilbo, Gandalf

let arr16 = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr16.join(':'); // glue the array into a string using ;

console.log(str ); // Bilbo;Gandalf;Nazgul

//reduce/reduceRight
/*
When we need to iterate over an array – we can use forEach, for or for..of.

When we need to iterate and return the data for each element – we can use map.

The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.

*/

let arr17 = [1, 2, 3, 4, 5];

let result = arr17.reduce((sum,curr) => sum+curr,0)

console.log(result);

//Array.isArray

  return (
    <div className="App">
        <h1>ARRAY METHODS</h1>
        <hr/>
        <ul>
          <li>Splice</li>
          <li>Slice</li>
          <li>Concat</li>
          <li>forEach</li>
          <li>Searching in array</li>
        </ul>
    </div>
  );
}

export default App;
