const express = requie('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3003;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/description', (req, res) => {

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

