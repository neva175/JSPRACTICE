// 1. map: double all numbers
const nums1 = [1, 2, 3, 4, 5];
const doubled = nums1.map(n => n * 2);
console.log("Doubled:", doubled);

// 2. filter: get even numbers
const nums2 = [1, 2, 3, 4, 5, 6];
const evens = nums2.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);

// 3. reduce: sum of numbers
const nums3 = [10, 20, 30, 40];
const sum = nums3.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

// 4. find: first user with age > 18
const users1 = [
  { name: "Ram", age: 16 },
  { name: "Sita", age: 20 },
  { name: "Hari", age: 25 }
];

const adultUser = users1.find(user => user.age > 18);
console.log("First adult:", adultUser);

// 5. forEach: log elements with index
const fruits = ["apple", "banana", "orange"];
fruits.forEach((item, index) => {
  console.log(index, item);
});

// 6. map: extract names
const users2 = [
  { name: "Amit", age: 22 },
  { name: "Nita", age: 19 }
];

const names = users2.map(user => user.name);
console.log("Names:", names);

// 7. filter: products with price < 100
const products = [
  { name: "Shoes", price: 120 },
  { name: "Bag", price: 80 },
  { name: "Pen", price: 20 }
];

const cheapProducts = products.filter(p => p.price < 100);
console.log("Cheap products:", cheapProducts);

// 8. reduce: find maximum value
const nums4 = [5, 10, 25, 8, 15];
const max = nums4.reduce((a, b) => (a > b ? a : b));
console.log("Max value:", max);

// 9. map + filter: names of adults in uppercase
const users3 = [
  { name: "Ram", age: 17 },
  { name: "Shyam", age: 21 },
  { name: "Gita", age: 19 }
];

const adultNames = users3
  .filter(user => user.age >= 18)
  .map(user => user.name.toUpperCase());

console.log("Adult names:", adultNames);

// 10. forEach: build HTML unordered list
const items = ["Item1", "Item2", "Item3"];
let htmlList = "<ul>";

items.forEach(item => {
  htmlList += `<li>${item}</li>`;
});

htmlList += "</ul>";
console.log("HTML List:", htmlList);