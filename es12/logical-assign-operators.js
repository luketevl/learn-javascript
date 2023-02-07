// The &&= operator
let expression1 = 0;
let expression2 = 5;
let expression3 = 10;

expression1 &&= expression2;

expression2 &&= expression3;

console.log("Expression 1", expression1); // 0
console.log("Expression 2", expression2); // 10
/* Explanation
In the first evaluation, expression1 is falsy. The expression1 value will not change.
In the second evaluation, expression2 is truthy. The expression3 value will be assigned to expression2.
*/ 

// The ||= operator
et expression1 = 0;
let expression2 = 5;
let expression3 = 10;

expression1 ||= expression2;

expression2 ||= expression3;

console.log("Expression 1", expression1); // 5
console.log("Expression 2", expression2); // 5

/* 
Explanation
In the first evaluation, the expression1 is falsy. The expression2 value will be assigned to expression1.
In the second evaluation, expression2 is truth. The expression2 value will not change.
*/ 

// The ??= operator
let expression1 = null;
let expression2 = 5;
let expression3 = 10;

expression1 ??= expression2;

expression2 ??= expression3;

console.log("Expression 1", expression1); // 5
console.log("Expression 2", expression2); // 5

/* Explanation
In the first evaluation, expression1 is null. The expression2 value will be assigned to expression1.
In the second evaluation, expression2 is neither null nor undefined. The expression2 value will not change.
*/