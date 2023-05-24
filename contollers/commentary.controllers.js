const Commentary = require("../models/Comment.model");

module.exports.commentaryController = {
  
  getcommentary: (req, res) => {
    Commentary.find().then((data)=>{
      res.send(data)
    })
  }

};
