## 🎯 Interview Questions - Blog Task

2. What is the use of the keyof keyword in TypeScript? Provide an example.
3. Explain the difference between any, unknown, and never types in TypeScript.
4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
5. Provide an example of using union and intersection types in TypeScript.

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
