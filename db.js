const mongoose = require('mongoose')

mongoose.connect(process.env.dbClusterString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
})

module.exports = mongoose.connection
