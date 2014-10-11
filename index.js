module.exports = function makeCache (nullValue) {
  var _cache = {};
  return function checkCache(propertyName, fillEmpty) {
    var cached = _cache[propertyName];
    if (cached === undefined || !propertyName) {
      cached = fillEmpty(propertyName);
      if (propertyName) {
        _cache[propertyName] = cached || nullValue;
      }
    }
    return cached;
  };
}
