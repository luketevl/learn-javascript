// arrow function

const peoples = [
  {
    name: 'Lukete',
    age: 27
  }
] 

// new
const names = peoples.map( people => people.name )

// old
const namesFn = peoples.map( fuction(people) {
  return  people.name;
})
