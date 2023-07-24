const mongoose = require("mongoose");

const News = new mongoose.Schema(
  {
    title: { type: String },
    category: { type: String },
    publisher: {
        href: { type: String },
        title: { type: String, }
    },
    publishDate: { type: Date },
    cardDate: {type: String },
    description: { type: String },
    image: { type: String },
    link: { type: String },
  },
  {collection : "articles"}
);

const model = mongoose.model("News", News);

module.exports = model;