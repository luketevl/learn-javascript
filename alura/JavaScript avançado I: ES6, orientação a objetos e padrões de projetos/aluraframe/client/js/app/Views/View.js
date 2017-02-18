class View {

  constructor(el){
    this._elemento = el;
  }

  update(model){
    this._elemento.innerHTML = this.template(model);
  }

  template(){
    throw new Error('Implement the method');
  }
}
