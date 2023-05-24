const News = require("../models/News.models");

module.exports.newsController = { 
  getNews: (req, res) => {
    News.find().then((data) => {
      res.json(data)
    })
  },
};
