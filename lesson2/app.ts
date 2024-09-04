enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "nick",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};

console.log(person.name);
for (let hobby of person.hobbies) {
  console.log(hobby.toString());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
