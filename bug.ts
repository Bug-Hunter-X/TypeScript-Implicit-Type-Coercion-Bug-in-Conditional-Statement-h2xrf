function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

let result = add(5, 3); // result is 8
result = subtract(10, 5); // result is 5

console.log(result); //prints 5

//Unexpected behavior when using the add and subtract functions in a conditional statement.

if (add(1, 1) > subtract(3, 1)){
  console.log("Addition is greater");
}

//It unexpectedly prints "Addition is greater", even though the condition is false. 
//The issue is not immediately apparent because of implicit type coercion and unexpected type handling in the conditional statement.  