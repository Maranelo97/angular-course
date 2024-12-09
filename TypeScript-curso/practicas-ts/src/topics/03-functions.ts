function addNum(a: number, b: number) {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => `${a + b}`;

const result = addNum(1, 4);

const resultArrow = addNumbersArrow(4, 8);

function multiply(first: number, second?: number, base: number = 3) {
  return first * base;
}

const multiplyRes: number = multiply(6);
//console.log({ result, resultArrow, multiplyRes });

interface iChar  {
    name: string;
    hp: number;
    showHp: () => void;
}

const heal = (character: iChar, amount: number) =>{
    character.hp += amount;
}

const strider: iChar = {
    name:"Strider",
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

heal(strider, 10);
heal(strider, 5);


strider.showHp()

export {};
