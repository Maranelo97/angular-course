import { Product, taxCalc } from "./06-function-destructuring";

const shopingCart: Product[] = [
  {
    description: "Motorolla",
    price: 45,
  },
  {
    description: "Notebook",
    price: 60,
  },
];
const tax = 0.15;
const [total, taxResut] = taxCalc({ products: shopingCart, tax });

console.log(total, taxResut);
