## CLASSE
  > - **Reflect**
      - **.apply(function, context, [params])** | _CLASSE ECMA6_ de reflexão, chama comando e contexto
      - **.get(target, prop, receiver)** | _CLASSE ECMA6_ de reflexão, busca o valor original
    - **Proxy** | Classe de proxy

## Comandos JS PADRAO
  > - **[].includes()** || Verifica se contem aquela palavra
    - **typeof()** || Verifica o TIPO

## Comandos JS ECMA6
  > - **Proxy** ||
    ```
      let proxy = new Proxy(instance CLASS, {
        // target || Referencia ao objeto original
        // prop || Propriedade acessada
        // receiver || Referencia para o proprio proxy
        get: function(target, prop, receiver){
        return Reflect.get(target, prop, receiver);
        },
        set: function(target, prop, value, receiver){
        return Reflect.set(target, prop, value, receiver);
        },

      });
    });
    ```
    - **Promises** || Promessa retorna um resultado futuro de algo, é _assincrona_
      - Como _criar_ promise
      ```
      return  new Promise((resolve, reject) => {
        resolve(); // é o .then
        reject(); // é o .catch
      });
      ```
      - Como _usar_ a promise
      ```
      promise.then(successCallback).catch(errorCallback);
      ```
      - Como _encadear_ **promises**, retorna o resultado de _todas_ as promises quando _todas_ _terminarem_
        - .then() || Possui array com _todas_ as _promise_
        - .catch || Para apenas _uma promise_
      ```
      Promise.all([promises]);
      ```

## Observações
  >
    - **ARROW FUNCTIONS** possui _ESCOPO_ **LEXO**
    - Métodos criados usando ES6 são adicionados no **prototype**. Qualquer método adicionando em prototype estará disponível para _todas_ as instâncias.
    - **PADRAO DE PROJETO**
      - _OBSERVER_ notifica parte dos sistemas interessados toda vez que um evento é executado.
      - **PROXY**
        - _MENTIROSO_ bom para criar armadilhas, acessa ele como se fosse o _objeto REAL_
      - **FACTORY** || Bom para generalizar a PROXY
    - Existe uma função que chama function
    - LEITURA depois APPLY
    - **ARGUMENTS** possui _todos_ os paramaetros passados.
    - **CALLBACK** || Passar funcao como parametro, setar os valores dentro dela, _ERROR FIRST_ (err, reponse)
