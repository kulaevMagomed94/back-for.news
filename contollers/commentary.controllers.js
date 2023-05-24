const Commentary = require("../models/Comment.model");

module.exports.commentaryController = {
  getcommentary: (req, res) => {
    Commentary.find({newsId : req.params.id}).then((data) => {
      res.send(data);
    });
  },

  adddCmmentary: (req, res) => {
    Commentary.create({
      nameCommentator: req.body.nameCommentator,
      textComment: req.body.text,
      newsId: req.body.newsId,
    })
      .then((news) => {
        res.status(200).send(news);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  deleteComments: (req, res) => {
    Commentary.findByIdAndDelete(req.params.id).then(() => {
      res.json(`Comment по ИД ${req.params.id} удален`);
    });
  },
};
