const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },

  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },

  avatar: {
    type: String,
    validate: {
      validator: (v) => /https?:\/\/((\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3})|((www.)?([a-z]|\d|-)+.[a-z]{2,4}))(:(\d|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|([1-5]\d{4})|(6[0-4]\d{3})|(65[0-4]\d{2})|(655[0-2]\d)|(6553[0-5])))?(\/(([a-z]|#|-|_)*)?)*/.test(v),
      message: (props) => `${props.value} is not a valid url`,
    },
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);
