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
};

const user: User = {
  firstName: "Jane",
  age: 20,
  email: "jane@doe.com",
  password: "111345",
  orders: [{ productId: "1", price: 200 }],
};

const printLog = (message: string) => {};

printLog(user.password);
