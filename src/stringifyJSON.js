var stringifyJSON = function(obj) {
  var objString = '';
  if (typeof obj === 'string') {
    objString += '"' + obj + '"';
  } else if (typeof obj === 'number') {
    return objString += obj;
  } else if (obj === null) {
    return 'null';
  } else if (obj === true) {
    return 'true';
  } else if (obj === false) {
    return 'false';
  } else if (Array.isArray(obj)) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
      arr.push(stringifyJSON(obj[i]));
    }
    return '[' + arr.join(',') + ']';
  } else if (typeof obj === 'object') {
    var poppedKey = Object.keys(obj).pop();
    objString += '{';
    for (var key in obj) {
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
        return '{}';
      }
      objString += '"' + key + '"' + ':' + stringifyJSON(obj[key]);
      if (key !== poppedKey) {
        objString += ',';
      }
    }
    objString += '}';
  }
  return objString;
};

