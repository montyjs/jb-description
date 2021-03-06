require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');

const app = express();
const port = process.env.LOCAL_PORT;

app.use(cors());
app.use(express.static(path.join(__dirname, '../public/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/descriptions', (req, res) => {
  db.getDescriptions((err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(400);
    } else {
      res.send(result);
    }
  });
});

app.get('/mensSizes', (req, res) => {
  db.getMensSizes((err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(400);
    } else {
      res.send(result);
    }
  });
});

app.get('/womensSizes', (req, res) => {
  db.getWomensSizes((err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(400);
    } else {
      res.send(result);
    }
  });
});

app.get('/euSizes', (req, res) => {
  db.getEuSizes((err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(400);
    } else {
      res.send(result);
    }
  });
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`listening on port ${port}`);
});
