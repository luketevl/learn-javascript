class NegociacaoView extends View{

  template(model){
    return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
          ${model.listaNegociacoes.map( item => `
              <tr>
              <td>${DateHelper.dateToText(item.data)}</td>
              <td>${item.quantidade}</td>
              <td>${item.valor}</td>
              <td>${item.volume}</td>
              </tr>
          `).join('')}
        </tbody>

        <tfoot>
        <td colspan="3"></td>
        <td>
          ${model.listaNegociacoes.reduce( (prev, element) => prev + element.volume, 0)}
        </td>
        </tfoot>
    </table>
    `;
  }
}
