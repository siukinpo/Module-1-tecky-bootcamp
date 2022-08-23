function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Array);
// expected output: true

console.log(auto instanceof Object);
// expected output: true

numArray = [45, 67, 89, 4353, 768];

console.log(numArray instanceof Object);

console.log(numArray.length);

a = { flag: "https://restcountries.eu/data/hkg.svg" };
console.log(`flag: ${a.flag}`);



