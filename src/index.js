const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const db = require('./config/db/');


db.connect();


app.use(express.static(path.join(__dirname, 'public')));

///HTTPS server
app.use(morgan('combined'));

const route = require('./routes');

//Templates engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

//127.0.0.1 -localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
