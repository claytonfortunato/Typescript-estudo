// Type
type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string; // ? sinal de opcional
  orders: Order[];
  register(): string;
};

const user: User = {
  firstName: "Jane",
  age: 20,
  email: "jane@doe.com",
  password: "111345",
  orders: [{ productId: "1", price: 200 }],
  register() {
    return "a";
  },
};

const printLog = (message: string) => {};

printLog(user.password);

//Unions
type Author = {
  books: string[];
};
const author: Author & User = {
  age: 2,
  books: ["1"],
  email: "author@gmail.com",
  firstName: "Felipe",
  orders: [],
  register() {
    return "a";
  },
};

// Interfaces
interface UserInterface {
  readonly firstName: string;
  email: string;
  login(): string;
}

const emailUser: UserInterface = {
  email: "felipe@gmail.com",
  firstName: "Felipe",
  login() {
    return "a";
  },
};

interface AuthorInterface {
  books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
  email: "author@gmail.com",
  login() {
    return "a";
  },
  firstName: "Felipe",
  books: [],
};

type Grade = number | string;
const grade: Grade = 1;
