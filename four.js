var thing = require("lodash");

var worker = function(towns) {
    var ranked = { hot: [], warm: [] };

    function hot (temp) {
      return temp > 19;
    };

    thing.forEach(towns, function(temps, town) {
      if (thing.every(temps, hot)) {
        ranked.hot.push(town);
      }

      else if (thing.some(temps, hot)){
        ranked.warm.push(town);
      }
    });

    return ranked;
};

module.exports = worker;
