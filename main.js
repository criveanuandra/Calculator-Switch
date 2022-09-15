const onCalculate = () => {
  const userInput = prompt("Adauga doua numere si operatia pe care doresti sa o faci:");

  if(userInput === null) {
    return;
  }

  let operation = "";
  //for(let i = 0; i < userInput.length; i++) {
  //  if (!Number.isInteger(Number(userInput[i]))) {
  //    operation = userInput[i];
  //    break;
  //  }
  //}

  let i = 0;
  while (i < userInput.length) {
    if (!Number.isInteger(Number(userInput[i]))) {
      operation = userInput[i];
      break;
    }
    i++;
  }

  let result = "", numbers = "";
  switch(operation) {
    case "+":
      numbers = userInput.split("+");
      result = Number(numbers[0]) + Number(numbers[1]);
      break;
    case "-":
      numbers = userInput.split("-");
      result = Number(numbers[0]) - Number(numbers[1]);
      break;
    case "/":
      numbers = userInput.split("/");
      result = Number(numbers[0]) / Number(numbers[1]);
      break;
    case "*":
      numbers = userInput.split("*");
      result = Number(numbers[0]) * Number(numbers[1]);
      break;
    default:
      result = "Ai introdus un operator gresit!";
  }

  alert(result);
}

const onMap = () => {
  const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  const letters = new Set();
  letters.add("a");
  letters.add("b");
  letters.add("c");
  letters.add("c");
  letters.add("c");
  letters.add("c");
  letters.add("c");
  letters.add("d");
  const object = {};
  console.log(object);
  //letters.forEach(function(value) {
  //  console.log(value);
  //});
  //console.log(letters.values());
  //console.log(fruits.has("apples"));
  //console.log(fruits.clear("apples"));
  //console.log(fruits.size);

  //console.log(fruits.delete("apples"));
  //console.log(fruits.keys());
  //console.log(fruits.set());
  //for (const fruit of fruits.entries()) {
  //  console.log(fruit[0]);
  //  console.log(fruit[1]);
  //}
  //console.log(fruits);
}