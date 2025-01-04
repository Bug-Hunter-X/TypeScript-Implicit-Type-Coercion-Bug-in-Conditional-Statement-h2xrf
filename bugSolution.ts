function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

let result = add(5, 3); // result is 8
result = subtract(10, 5); // result is 5

console.log(result); //prints 5

//Solution: Explicit type checking and handling
if (add(1, 1) > subtract(3, 1)){
  console.log("Addition is greater");
} else {
  console.log("Subtraction is greater or equal"); //Correct output
}

//Alternative solution: Using strict equality
if (add(1,1) === subtract(3,1)){
  console.log("Values are equal");
} else if (add(1,1) > subtract(3,1)) {
  console.log("Addition is greater");
} else {
  console.log("Subtraction is greater");
}
//This approach avoids implicit type coercion by using strict equality. 