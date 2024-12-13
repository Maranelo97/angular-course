export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia 120",
  price: 100,
};

const tablet: Product = {
  description: "Galaxy Fold",
  price: 150,
};

const shoppingCart = [phone, tablet];
const tax = 0.15;

export interface TaxCalOptions {
  tax: number;
  products: Product[];
}

export function taxCalc(options: TaxCalOptions): [number, number] {
  const { products, tax } = options;

  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

const [result1, resul2] = taxCalc({ products: shoppingCart, tax });
console.log(result1, resul2);

