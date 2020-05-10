const app = require('./config/express')();
const portDefault = app.get('port');

var port = process.env.PORT || portDefault;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});
