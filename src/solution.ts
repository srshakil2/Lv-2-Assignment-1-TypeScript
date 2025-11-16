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
// console.log(formatValue("Hello"));
// console.log(formatValue(5));
// console.log(formatValue(false));

type InputLength = string | number[];
const getLength = (value: InputLength): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  throw new Error("Please provide a valid input");
};
// console.log(getLength("TypeScript"));
// console.log(getLength([1, 2, 3, 4, 5]));

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
// const person1 = new Person("John Doe", 30);
// console.log(person1.getDetails());
// const person2 = new Person("Alice", 25);
// console.log(person2.getDetails());

type Item = { title: string; rating: number };
const filterByRating = (items: Item[]): Item[] => {
  const filteredItems = items.filter((item) => item.rating >= 4);
  return filteredItems;
};
// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];
// console.log(filterByRating(books));

type User = { id: number; name: string; email: string; isActive: boolean };
const filterActiveUsers = (users: User[]): User[] => {
  const filteredUsers = users.filter((user) => user.isActive);
  return filteredUsers;
};
// const users = [
//   { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
//   { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
//   { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
// ];
// console.log(filterActiveUsers(users));

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
// const myBook: Book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   publishedYear: 1925,
//   isAvailable: true,
// };
// printBookDetails(myBook);
