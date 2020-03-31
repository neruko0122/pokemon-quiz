const express = require('express');

const app = express();

app.use(express.static('./dist/pokemon-quiz'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {
    root: 'dist/pokemon-quiz/'
  }),
);

app.listen(process.env.PORT || 8080);
