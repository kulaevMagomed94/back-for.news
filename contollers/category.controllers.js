const Category = require("../models/Category.model");

module.exports.categoryController = {
  getCategories: (req, res) => {
    Category.find().then((data) => {
      res.json(data)
    })
  },

  addCategories: (req, res) => {

  },

  deleteCategories: (req, res) => {

  },
};
