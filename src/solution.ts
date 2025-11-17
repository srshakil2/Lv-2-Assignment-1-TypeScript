type InputValue = string | number | boolean;
const formatValue = (value: InputValue): InputValue => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

type InputLength = string | number[];
const getLength = (value: InputLength): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  throw new Error("Please provide a valid input");
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}
const person1 = new Person("John Doe", 30);
const person2 = new Person("Alice", 25);

type Item = { title: string; rating: number };
const filterByRating = (items: Item[]): Item[] => {
  const filteredItems = items.filter((item) => item.rating >= 4);
  return filteredItems;
};

type User = { id: number; name: string; email: string; isActive: boolean };
const filterActiveUsers = (users: User[]): User[] => {
  const filteredUsers = users.filter((user) => user.isActive);
  return filteredUsers;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (book: Book) => {
  const availability = book.isAvailable ? "Yes" : "No";
  return console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
};

type ArrayType = number[] | string[];
const getUniqueValues = (arr1: ArrayType, arr2: ArrayType) => {
  const unique = [];
  for (let i = 0; i < arr1.length; i++) {
    let exists = false;
    for (let j = 0; j < unique.length; j++) {
      if (arr1[i] === unique[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      unique[unique.length] = arr1[i];
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    let exists = false;
    for (let j = 0; j < unique.length; j++) {
      if (arr2[i] === unique[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      unique[unique.length] = arr2[i];
    }
  }
  return unique;
};

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
const calculateTotalPrice = (products: Product[]): number => {
  const total = products.reduce((acc, product) => {
    const discount = product?.discount ? product.discount : 0;
    const productTotal =
      product.price * product.quantity * (1 - discount / 100);
    return acc + productTotal;
  }, 0);
  return total;
};
