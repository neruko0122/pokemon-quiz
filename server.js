const express = require('express');

const app = express();

var log4js = require("log4js");

log4js.configure({
  "appenders": [{
      "type": "file",
      "filename": "log/system.log",
      "maxLogSize": 20480,
      "backups": 3,
      "category": "system"
    },
    {
      "type": "console"
    }
  ],
  "levels": {
    "system": "ALL"
  }
});

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
