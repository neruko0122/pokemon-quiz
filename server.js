const express = require('express');
const log4js = require("log4js");

const app = express();

log4js.configure('./log4js.config.json')
var logger = log4js.getLogger("system");

app.use(log4js.connectLogger(logger, {
  level: 'auto'
}));

app.use(express.static('./dist/pokemon-quiz'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {
    root: 'dist/pokemon-quiz/'
  }),
);

app.listen(process.env.PORT || 8080);
