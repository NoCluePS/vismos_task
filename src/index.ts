import prompt from "prompt-sync";

const name = prompt()("What is your name?: ");
const age = prompt()(`What is your age ${name}?: `);

console.log(name, +age > 18 ? "can drink" : "can't drink");
