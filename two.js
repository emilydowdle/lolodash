var _ = require("lodash");

var worker = function(stuff) {
  return _.sortBy(stuff, 'quantity').reverse();
};

module.exports = worker;
