export function whatsMyType<T>(arg: T): T {
  return arg;
}

let imString = whatsMyType<string>("Hola mundo");
let imNumber = whatsMyType<number>(89.2234234234);
let imArray = whatsMyType<number[]>([10, 20, 30]);

console.log(imString.split(" "));
console.log(imNumber.toFixed(2));
console.log(imArray.join('-'));
