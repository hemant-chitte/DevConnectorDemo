const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('school', SchoolSchema);
