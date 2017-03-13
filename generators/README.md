# Generators
> Asyncchronous code 

> Generator **return**  **OBJECT** with ```{value, done}```

- **Creating** _syntax_
```javascript
function* generatorName(){
	
}
```

- **STOP** generator
```javascript
function* generatorName(){
	yield 1; // return
	yield 2;	
}
```

- *DELEGATION ITERATOR CONTROL** 
	- use _yield*_
```javascript
// function 

function* other(){
	yield 2;
	yield 3;
}
// CREATING GENERATOR
function* logger(){
	yield 1;
	yield* other();
	yield 4;
}

const iterator = logger();
iterator.next(); // { value: 1, done: false }
iterator.next(); // { value: 2, done: false }
iterator.next(); // { value: 3, done: false }
iterator.next(); // { value: 4, done: true }


```
- **Execute** generator
```javascript
const iterator = generatorFunction();
iterator.next();
```

- **Execute** generator with **PARAM**
```javascript
function* generatorName(){
	console.log(yield);     // Max
}
const iterator = generatorFunction();
iterator.next('Max');
```
