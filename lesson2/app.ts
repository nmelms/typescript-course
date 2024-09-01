const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "nick",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: [2, "author"],
};

console.log(person.name);
for (let hobby of person.hobbies) {
  console.log(hobby.toString());
}
