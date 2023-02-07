export class People {
  #name = "Lukete";
  secondName = "Henrique";
}

const me = new People();
me.secondName; // Henrique
me.name; // error
me.#name; // error
