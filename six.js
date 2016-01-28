var _ = require("lodash");

var worker = function(comments) {
  return _.chain(comments)
    .groupBy('username')
    .map(function(siteComments, username) {
      return {username: username, comment_count: _.size(siteComments)}
    })
    .sortBy(function(count) {
      return -count['comment_count']
    })
};

module.exports = worker;
