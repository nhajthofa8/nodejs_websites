const Course = require('../models/Course');
class SearchController {
  async index(req, res) {
  try {
    const data = await Course.find({});
    res.json(data);
}  catch (err) {
    res.status(400).json({error: err});

}
 //   res.render('search');
  }
}
module.exports = new SearchController();
