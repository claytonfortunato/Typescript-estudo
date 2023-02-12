/*
    Tuple:
    O que são?
    Como declarar?
    Como utilizar?
    Métodos disponiveis?
    Como acessar um elemento?
*/

// asas

const array: Array<number> = [1, 2, 3, 4, 5];
const tupla: [string, number, string, boolean] = [
  "primeiro",
  2,
  "terceiro",
  true,
];

const responseFail = ["não encontrado", 404];

tupla.map((item, index) => console.log(`[${index}] - ${item}`));

console.log("antes", tupla);
tupla.push("ultimo");
console.log("depois", tupla);

tupla[2] = "teste";
console.log("depois", tupla);
