
// CREATING GENERATOR
function* logger(){
	yield 1;
	yield 2;
}

const iterator = logger();
iterator.next(); // { value: 1, done: false }
iterator.next(); // { value: 2, done: true }
