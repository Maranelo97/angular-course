const skills: string[] = ["Bash", "Counter", "Healing"];

interface char {
  name: string;
  hp: number;
  skills: string[];
  homeTown?: string
}

const strider: char = {
  name: "strider",
  hp: 100,
  skills: ["Bash", "Dash"],
};

strider.homeTown = "RivenDaell"

console.table(strider)

export {};
