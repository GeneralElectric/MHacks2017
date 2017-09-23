'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Helloo!!\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://mongo:27017/test';

MongoClient.connect(url, function(err, db) {
  console.log("Connected correctly to server.");
  db.close();
});

