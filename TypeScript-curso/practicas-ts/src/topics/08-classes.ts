export class Person {
  constructor(public name: string, private address: string = "No Adress") {}
}

/*
export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realNAme: string
  ) {
    super(realNAme);
  }
}

const lebron = new Hero("SuperStar", 39, "Lebron James");

console.log(lebron);
 */

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realNAme: string,
    public person: Person
  ) {
    this.person = new Person(realNAme);
  }
}

const mariano = new Person("Maraino", "Buenos Aires");
const person = new Hero("Marian", 27, "Mariano Santos", mariano);

console.log(person)
