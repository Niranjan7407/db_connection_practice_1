const express = require('express');
const { resolve } = require('path');
require('dotenv').config();
const connectDB=require('./database/db')

const app = express();
const port = 3010;
const db_url=process.env.db_url

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  connectDB(db_url)
});

