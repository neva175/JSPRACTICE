// 1. Array colors and log third element
const colors = ["red", "blue", "green", "yellow", "purple"];
console.log("Third color:", colors[2]);

// 2. Object book
const book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  pages: 208,
  publishedYear: 1988
}
console.log(book)

// 3. Add isRead immutably
const updatedBook = {
  ...book,
  isRead: true
};
console.log("Updated book:", updatedBook);

// 4. Array of student objects
const students = [
  { name: "Amit", grade: "A" },
  { name: "Sita", grade: "B" },
  { name: "Ram", grade: "A+" }
];
console.log("Students:", students);

// 5. Nested object company
const company = {
  name: "TechCorp",
  location: "Kathmandu",
  employees: ["John", "Alice", "Bob"]
};
console.log("Company:", company);

// 6. Increase numbers by 5 immutably
const numbers = [10, 20, 30];
const newNumbers = numbers.map(num => num + 5);
console.log("Updated numbers:", newNumbers);

// 7. Object car and add color immutably
const car = {
  brand: "Toyota",
  model: "Corolla"
};
console.log(car)

const updatedCar = {
  ...car,
  color: "white"
};
console.log("Updated car:", updatedCar);

// 8. Add item at beginning of shoppingList immutably
const shoppingList = ["milk", "bread", "eggs"];
const newShoppingList = ["fruits", ...shoppingList];
console.log("Shopping list:", newShoppingList);

// 9. Object profile with nested address
const profile = {
  name: "Alish",
  address: {
    city: "Kathmandu",
    country: "Nepal"
  }
};
console.log("Profile:", profile);

// 10. Extract name and price from products
const products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Phone", price: 500, category: "Electronics" },
  { name: "Shoes", price: 100, category: "Fashion" }
];

const simplifiedProducts = products.map(product => ({
  name: product.name,
  price: product.price
}));

console.log("Simplified products:", simplifiedProducts);