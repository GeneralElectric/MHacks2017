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

const pg = require('pg');
const connectionString = "postgres://postgres:postgres@postgres/postgres"

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { console.log("DONE!"); client.end(); });
