## 🎯 Interview Questions - Blog Task

### 1. What are some differences between interfaces and types in TypeScript?

TypeScript-এ interface এবং type দুটোই object-এর structure define করতে ব্যবহৃত হয়, তবে কিছু পার্থক্য আছে:

#### ✅ মূল পার্থক্য:

- interface শুধু object structure define করতে ভালো
- type আরও flexible — union, tuple, primitive ইত্যাদি define করা যায়
- interface merge হতে পারে, type পারে না
- extend করা যায় দুটোতেই, তবে syntax ভিন্ন

#### উদাহরণ:

```TypeScript
// Interface Example
interface User {
  name: string;
  age: number;
}

// Type Example
type UserType = {
  name: string;
  age: number;
};

// Type with union
type Status = "success" | "error";
```

### 2. What is the use of the keyof keyword in TypeScript? Provide an example.

keyof কোনো object type-এর সকল key-কে একটি union type হিসেবে রিটার্ন করে।

#### ✅ কেন ব্যবহার করা হয়?

- Object-এর keys কে টাইপ হিসেবে পাওয়া
- Type-safe property access করা
- Generic ফাংশনে dynamic key ব্যবহার করা

#### ✅ উদাহরণ:

```TypeScript
type User = {
  name: string;
  age: number;
  email: string;
};

type UserKeys = keyof User;
// Output: "name" | "age" | "email"

function getValue(obj: User, key: UserKeys) {
  return obj[key];
}

getValue({ name: "Robiul", age: 22, email: "r@gmail.com" }, "name");
```

### 3. Explain the difference between any, unknown, and never types in TypeScript.

#### TypeScript এ any, unknown, এবং never – মধ্যে পার্থক্য ?

#### any

- যেকোনো ভ্যালু রাখা যায়
- টাইপ চেক করে না
- সবচেয়ে কম সেফ

```TypeScript
let x: any = 20;
x = "text";
x=true
```

#### unknown

- any-এর মতোই, কিন্তু সেফ
- ব্যবহার করার আগে টাইপ চেক করতে হয়

```TypeScript
let y: unknown = "Hello";

if (typeof y === "string") {
  console.log(y.toUpperCase());
}
```

#### never

- এমন জিনিস বোঝায় যা কখনোই ঘটে না
- যেমন: error throw করা ফাংশন

```TypeScript
function throwError(msg: string): never {
  throw new Error(msg);
}
```

### 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

TypeScript-এ enum হলো একটি বিশেষ ডাটা টাইপ যা fixed মানের তালিকা তৈরি করতে ব্যবহার করা হয়।

#### Numeric Enum:

```TypeScript
enum Status {
  Pending,
  Success,
  Failed
}

let s: Status = Status.Success;
```

#### String Enum:

```TypeScript
enum UserRole {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest"
}

let r: UserRole = UserRole.ADMIN;
```

### 5. Provide an example of using union and intersection types in TypeScript?

#### Union Type (একাধিক টাইপের যেকোনো একটাকে গ্রহণ করে)

```TypeScript
let value: string | number;
value = "Hello";
value = 10;
```

#### Intersection Type (২ বা তার বেশি টাইপকে একত্র করা)

```TypeScript
type A = { name: string };
type B = { age: number };

type Person = A & B;

const user: Person = {
  name: "Robiul",
  age: 22
};
```
