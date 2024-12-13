interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Marian",
};

const passenger2: Passenger = {
  name: "Melina",
  children: ["Fabrizio", "Mariano"],
};

const countChildren = (passenger: Passenger): number => {
  const { name } = passenger;
  const howMany = passenger.children!.length;

  console.log(name, howMany);
  return howMany;
};

countChildren(passenger1);
countChildren(passenger2);

export {};
