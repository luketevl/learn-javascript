class ListaNegociacoes {
  constructor(){
    this._negociacoes = [];
  }

  add(item){
    this._negociacoes.push(item);
  }

  get listaNegociacoes(){
    return [].concat(this._negociacoes);
  }
}
