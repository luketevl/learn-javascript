const obj = Object.create(null);
obj.color = "green";
obj.age = 2;
obj.hasOwnProperty = () => false;

console.log(Object.hasOwn(obj, "color")); // true
console.log(Object.hasOwn(obj, "name")); // false
