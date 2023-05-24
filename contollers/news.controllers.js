const News = require("../models/News.models");

module.exports.newsController = {
  getNews: (req, res) => {
    News.find().then((news) => {
      res.json(news);
    });
  },
  getNewsbyId: (req, res) => {
    News.findById(req.params.id).then((news) => {
      res.json(news);
    });
  },
  getNewsCategoryById: (req, res) => {
    News.find({categoryId: req.params.id}).then((news) => {
      res.json(news);
    });
  },
  createNews: (req, res) => {
    News.create({
      title: req.body.title,
      text: req.body.text,
      categoryId: req.body.categoryId,
    })
      .then((news) => {
        res.status(200).send(news);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  changeNews: (req, res) => {
    News.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, text: req.body.text },
      { new: true }
    )
      .then((news) => {
        res.status(200).send(news);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  deleteNews: (req, res) => {
    News.findByIdAndDelete(req.params.id).then(() => {
      res.json(`News по ИД ${req.params.id} удалена`);
    });
  },
};
