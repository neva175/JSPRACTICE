//task 1
const firstName = "Niva";
const lastName = "Rajchal";

const greeting = `Hello, ${firstName} ${lastName}!`;

console.log(greeting);

//task 2
{
  let city = "Kathmandu";
  console.log(city);
}

// console.log(city);
// ReferenceError: city is not defined


{
  const country = "Nepal";
  console.log(country);
}

// console.log(country);
// ReferenceError: country is not defined

//task 3
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Aayush"));

//task4
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(5, 6));

//task 5
const person = {
  name: "Sita",
  age: 22,
  country: "Nepal"
};

const { name, country } = person;

console.log(name);
console.log(country);

//task 6
const values = [10, 20, 30, 40];

const [num1, num2] = values;

console.log(num1);
console.log(num2);

//task 7 default parameters
function sayHello(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

sayHello("Nisha");
sayHello();

//task 8 rest operators
onst sumAll = (...numbers) => {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
};

console.log(sumAll(1, 2, 3, 4));

//task 9 spread operators with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);

//task 10 merge and destructure objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObject = {
  ...obj1,
  ...obj2
};

const { a, d } = mergedObject;

console.log(a);
console.log(d);