const Category = require("../models/Category.model");

module.exports.categoryController = {
  getCategories: (req, res) => {
    Category.find().then((data) => {
      res.json(data)
    })
  },

  addCategories: (req, res) => {
    Category.create({'category': req.body.name}).then(() => {
      res.json(`${req.body.name} - Категория добавлена`);
    });
  },

  deleteCategories: (req, res) => {
    Category.findByIdAndDelete(req.params.id).then(() => {
      res.json(`Категория по ИД ${req.params.id} - удалена`);
    });
  },
};
