const arr = [1, 2, 3, 4, 5, 6];
const cesta = ["banana", "maçã", "abacate", "abacaxi"];

const squareArr = arr.map(function (item) {
  return item * item;
});

const fruitPosition = cesta.map(function (item, index) {
  `A/O ${item} está na posição ${index} do array.`;
});

// console.log(squareArr);

const sum = arr.reduce(function (total, next) {
  return total + next;
});

const filter = arr.filter(function (item) {
  return item % 2 === 0;
});

const filter2 = cesta.filter(function (item) {
  return item === "banana";
});

// console.log(filter);
// console.log(filter2);

const find = arr.find(function (item) {
  return item === 4;
});

console.log(find);
