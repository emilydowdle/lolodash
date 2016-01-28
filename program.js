// var characters = [
//   { 'name': 'barney', 'age': 36, 'pets': ['hoppy'] },
//   { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
// ];
//
// _.filter(characters, { 'age': 36 });

// [{ 'name': 'barney', 'age': 36, 'pets': ['hoppy'] }]


[
    { id: 22, username: "martin", active: true},
    { id: 23, username: "max",    active: false},
    { id: 24, username: "linda",  active: false}
]

var thing = require("lodash");

var worker = function(users) {
  return thing.filter(users, {'active': true})
  };

// export the worker function as a nodejs module
module.exports = worker;
