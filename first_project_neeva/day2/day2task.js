// Task 1 — "this" inside object method

const user = {
  name: "Aayush",

  login() {
    console.log(`${this.name} logged in`);
  }
};

user.login()
// Task 2 — Losing "this" context

const button = {
  text: "Save",

  click() {
    console.log(`Button: ${this.text}`);
  }
};

const brokenFunction = button.click;

// brokenFunction(); // this becomes undefined

const fixedFunction = button.click.bind(button);

fixedFunction();

// Task 3 — config.js

// config.js

export const API_BASE_URL =
  "https://api.myapp.com";

// Task 3 — main.js

// main.js

import { API_BASE_URL } from "./config.js";

console.log(API_BASE_URL);

// Task 4 — utils.js

// utils.js

export function formatCurrency(amount) {
  return `$${amount}`;
}

export function generateRandomId() {
  return Math.floor(Math.random() * 10000);
}

export function getTodayDate() {
  return new Date().toDateString();
// Task 4 — app.js

// app.js

import {
  formatCurrency,
  generateRandomId,
  getTodayDate
} from "./utils.js";

console.log(formatCurrency(500));
console.log(generateRandomId());
console.log(getTodayDate());

// Task 5 — Product Class

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name} costs $${this.price}`;
  }
}

const laptop = new Product(
  "Laptop",
  1200
);

console.log(laptop.getInfo());

// Task 6 — Inheritance

class FoodProduct extends Product {
  constructor(name, price, expiryDate) {
    super(name, price);

    this.expiryDate = expiryDate;
  }

  getExpiryDate() {
    return `Expiry: ${this.expiryDate}`;
  }
}

const milk = new FoodProduct(
  "Milk",
  5,
  "2026-07-01"
);

console.log(milk.getInfo());
console.log(milk.getExpiryDate());

// Task 7 — Promise settings

function fetchSettings() {
  return new Promise((resolve) => {

    setTimeout(() => {

      resolve({
        theme: "dark",
        language: "English"
      });

    }, 2000);

  });
}

fetchSettings()
  .then((settings) => {

    console.log(settings);

  })
// Task 8 — async/await users

function fetchUsers() {
  return new Promise((resolve) => {

    setTimeout(() => {

      resolve([
        { id: 1, name: "Ram" },
        { id: 2, name: "Sita" }
      ]);

    }, 1000);

  });
}

async function loadUsers() {

  const users = await fetchUsers();

  console.log(users);
}

loadUsers();

// Task 9 — try/catch errors

function fetchData() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      const success = Math.random() > 0.5;

      if (success) {

        resolve([
          { id: 1, name: "Hari" }
        ]);

      } else {

        reject("API failed");

      }

    }, 1000);

  });
}

async function loadData() {

  try {

    const data = await fetchData();

    console.log(data);

  } catch (error) {

    console.log(
      "Unable to fetch data. Try again later."
    );

  }
}

loadData();

// Task 10 — Combined mini app

// config.js

export const API_URL =
  "https://fakeapi.com/products";


// utils.js

export function formatPrice(price) {
  return `$${price}`;
}


// product.js

export class ProductItem {

  constructor(name, price) {

    this.name = name;
    this.price = price;

  }

  getDetails() {

    return `${this.name} - $${this.price}`;

  }
}


// app.js

import { API_URL } from "./config.js";

import { formatPrice } from "./utils.js";

import { ProductItem } from "./product.js";


function fetchProducts() {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      const success = true;

      if (success) {

        resolve([
          {
            name: "Phone",
            price: 800
          },
          {
            name: "Tablet",
            price: 600
          }
        ]);

      } else {

        reject("Failed to fetch");

      }

    }, 1000);

  });

}


async function startApp() {

  try {

    console.log(API_URL);

    const products =
      await fetchProducts();

    products.forEach((item) => {

      const product =
        new ProductItem(
          item.name,
          item.price
        );

      console.log(
        `${product.name} costs ${formatPrice(product.price)}`
      );

    });

  } catch (error) {

    console.log(
      "Something went wrong."
    );

  }

}

startApp();
