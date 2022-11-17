let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Harsh";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, code };
}

generateError("An error occurred!", 500);

console.log("Hello");
