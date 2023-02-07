export class People {
  secondName = "Henrique";
  #age() {
    return "secret age ;)";
  }
}

const me = new People();
me.secondName; // Henrique
me.age(); //error
me.#age(); //error
