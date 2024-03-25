const path = require('path');
const express = require('express');
const app = express();
const port = 3002;
const morgan = require('morgan');
const db = require('./config/db/');
const cors = require('cors');
const bodyParser = require('body-parser')

const route = require('./routes');


app.use(morgan('combined'));
///HTTPS server
app.use(bodyParser.json());
app.use(cors)
route(app);

db.connect();


//127.0.0.1 -localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
