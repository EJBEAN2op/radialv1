const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const prefixSchema = mongoose.Schema({
    GuildID: reqString,
    Prefix: {
      type: String, 
    }
})

module.exports = mongoose.model('per-server-prefix', prefixSchema)