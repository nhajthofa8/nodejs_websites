const newsRouter = require('./news');
const searchRouter = require('./search');

function route(app) {
  app.use('/news', newsRouter);

  app.use('/search', searchRouter);

  app.get('/', (req, res) => {
    res.render('home');
  });
  app.post('/search', (req, res) => {
    console.log(req.body);
    res.send('');
  });
}
module.exports = route;
