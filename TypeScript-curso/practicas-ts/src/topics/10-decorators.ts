function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "New Prop";
    hello = "Override";
  };
}

@classDecorator
export class SupperClass {
  public myProperty: string = "ABC123";

  print() {
    console.log("Hola Mundo");
  }
}

console.log(SupperClass);

const myClass = new SupperClass();

console.log(myClass);
