const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  title: String,
  text: String,
  categoryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category' 
  }
});

const News = mongoose.model('News', newsSchema);

module.exports = News;