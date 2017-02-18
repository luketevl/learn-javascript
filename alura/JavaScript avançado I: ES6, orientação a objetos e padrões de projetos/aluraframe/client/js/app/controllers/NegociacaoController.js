class NegociacaoController{
  constructor(){
    let $     = document.querySelector.bind(document);
    this._quantidade        = $('#quantidade');
    this._vrdata            = $('#data');
    this._valor             = $('#valor');
    this._listaNegociacoes  = new ListaNegociacoes();
    this._negociacaoView    = new NegociacaoView($('#negociacaoView'));
    this._msgView           = new MensagemView($('#msgView'));

    this._negociacaoView.update(this._listaNegociacoes);
  }
  add(event){
    event.preventDefault();
    console.log('Add negociacao Controller');

    let msg = new Mensagem('Success');

    this._msgView.update(msg);

    let negociacao = new Negociacao(DateHelper.textToDate(this._vrdata.value), this._quantidade.value, this._valor.value);
    this._listaNegociacoes.add(negociacao);

    this._negociacaoView.update(this._listaNegociacoes);

    this._clearForm();
  };

  _clearForm(){
    this._vrdata.value      = '';
    this._quantidade.value  = 1;
    this._valor.value       = 2;
    this._vrdata.focus();
  }
}
