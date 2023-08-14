const BlogPost = require('../models/BlogPost.js')
const path = require('path')

module.exports = (req, res) => {
  let image = req.files.image;
  image.mv(path.resolve(__dirname, '..','public/img', image.name));
  BlogPost.create({...req.body,
  image: '/img/' + image.name});
  res.redirect('/')
}

