var off2json = require('off2json');

module.exports = function(content) {
  this.cacheable && this.cacheable();
  var value = off2json(content);
  this.value = value;
  return value;
}
