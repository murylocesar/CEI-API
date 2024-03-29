# CEI REST API
API REST que retorna dados do CEI([Canal Eletrônico do Investidor](https://cei.b3.com.br/)) utilizando o package [cei-crawler](https://github.com/Menighin/cei-crawler).


### Detalhes
* Deploy feito no [App Engine](https://cloud.google.com/appengine)
* Utilizado [Node.js](https://nodejs.org/en/) com o framework [Express](https://expressjs.com/pt-br/)


### Instalação
1. Clone o repositório
```bash
git clone https://github.com/matheuspcunha/CEI-API && cd api-cei
```

2. Instale as dependências
```bash
npm install
```

3. Inicie a aplicação
```bash
npm start
```

### Utilização

| Método              | Tipo      | Path          | Parâmetros                                                                                                                                                                        
|---------------------|-----------|---------------|--------------------------------------------------------------------|
| **getStockHistory** | POST      | /stockhistory | `username`, `password`, `dateStart`(opcional), `dateEnd`(opcional) |
| **getDividends**    | POST      | /dividends    | `username`, `password`                                             |
| **getWallet**       | POST      | /wallet       | `username`, `password`, `date`(opcional)                           |

Detalhes de cada um desses métodos estão listados [aqui](https://github.com/Menighin/cei-crawler/blob/master/README.md#utilização).
