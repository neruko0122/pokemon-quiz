const express = require('express');
const log4js = require("log4js");
const bodyParser = require('body-parser');

const http = require('http');
const api = require('./server/routes/api')


const app = express();

log4js.configure('./log4js.config.json')
var logger = log4js.getLogger('system');

app.use(log4js.connectLogger(logger));
app.use(bodyParser());
app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('./dist/pokemon-quiz'));
app.use('/api', api);

app.get('/*', (req, res) =>
  res.sendFile('index.html', {
    root: 'dist/pokemon-quiz/'
  }),
);

logger.info("===# APP START #===")
const server = http.createServer(app)

server.listen(process.env.PORT || 8080);
