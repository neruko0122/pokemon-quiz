const express = require('express');

const app = express();

var log4js = require("log4js");

var logger = log4js.getLogger("debug");

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
