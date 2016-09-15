var mongoose = require('mongoose'),
  env = process.env.NODE_ENV || 'development',
  config = require('../../config/config')[env],
  Schema = mongoose.Schema;

//=============================
// Schema
//=============================
var vulnSchema = new Schema({
  titulo: String,
  descripcion: String,
  solucion: String,
  referencias: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

//=============================
// Methods
//=============================
vulnSchema.statics.findByName = function(name, cb) {
  this.find({ name: new RegExp(name, 'i') }, cb);
};

module.exports = mongoose.model('Vulnerabl', vulnSchema);
