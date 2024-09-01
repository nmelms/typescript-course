const person = {
  name: "nick",
  age: 30,
  hobbies: ["sports", "cooking"],
};
console.log(person.name);
for (let hobby of person.hobbies) {
  console.log(hobby.toString());
}
