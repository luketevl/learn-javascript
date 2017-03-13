
// CREATING GENERATOR
function* logger(){
	console.log("Start");
	console.log("End");
}

const iterator = logger();
iterator.next();
