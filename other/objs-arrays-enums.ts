enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role.ADMIN;
} = {
  name: "Harsh",
  age: 24,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};
console.log(Role.ADMIN);
