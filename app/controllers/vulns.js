var Vulns = require('../models/vulnerabl.js');

//=============================
// List
//=============================
exports.index = function(req, res) {
  Vulns.find(function(err, people) {
    if (err) throw err;

    res.send(people);
  });
};

//=============================
// Show
//=============================
exports.show = function(req, res) {
  var id = req.params.id;

  Vulns.findOne({ _id: id }, function(err, vulnerabl) {
    if (err) throw err;

    res.send(vulnerabl);
  });
};

//=============================
// Create
//=============================
exports.create = function(req, res) {
  console.log(req.body);
  new Vulns(req.body).save(function(err, vulnerabl) {
    if (err) throw err;

    res.send(vulnerabl);
  });
};

//=============================
// Update
//=============================
exports.update = function(req, res) {
  var id = req.params.id;

  Vulns.findOneAndUpdate({ _id: id }, req.body, function(err, vulnerabl) {
    if (err) throw err;

    res.send(vulnerabl);
  });
};

//=============================
// Delete
//=============================
exports.delete = function(req, res) {
  var id = req.params.id;

  Vulns.remove({ _id: id }, function (err) {
    if (err) throw err;

    res.send(200);
  });
};
