const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const accountSchema = mongoose.Schema({
    userID: reqString,
    Password: {
      type: String, 
    }
})

module.exports = mongoose.model('account', accountSchema)