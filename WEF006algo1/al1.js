const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // A memory block enough to hold the reference of ten numbers is created
console.log(array[0]); // Accessing the first index of the memory block
console.log(array[5]); // Accessing the sixth index of the memory block

console.log(array.push(11)); // Adding the eleventh elements and JS runtime reallocates a longer memory block for you automatically.
console.log(array.splice(3, 1)); // Remove the third element
console.log(array);


// What is algorithm?
// Example
// Go to School Algorithm

// 1. Go to the Bus stop
// 2. Catch Bus YYY
// 3. Transfer to Bus YYY
// 4. Get off the Bus in Street