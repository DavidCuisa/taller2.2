const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  userId: String,
  name: String,
  author: String,
  description: String,
  status: String,
  imageURL: String,
  date: {
    type: date,
    default: Date.now,
  },
});

const book = mongoose.model("book", taskSchema);

module.exports = book;
