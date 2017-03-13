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
