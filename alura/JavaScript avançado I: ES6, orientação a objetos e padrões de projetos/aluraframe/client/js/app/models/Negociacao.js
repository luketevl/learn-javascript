class Negociacao {

    // Construtor
    constructor(data, qtd, vr){
      this._data       = new Date(data.getTime());
      this._quantidade = qtd;
      this._valor      = vr;
      Object.freeze(this);
    }

    // Metodos
    get volume(){
      return this._quantidade * this._valor;
    }

    get data(){
      return new Date(this._data.getTime());
    }
    get quantidade(){
      return this._quantidade;
    }
    get valor(){
      return this._valor;
    }

}
