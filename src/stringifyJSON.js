// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // for arrays add square brackets
  if (Array.isArray(obj)) {
    let result = [];

    obj.forEach(item => result.push(stringifyJSON(item)))

    return `[${result}]`;
  }

  // for objects add curly brackets
  if (obj && typeof obj === 'object') {
    let result = [];

    for (let key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        result.push(`${stringifyJSON(key)}:${stringifyJSON(obj[key])}`);
      }
    }

    return `{${result.join(',')}}`;
  }

  // for strings add quotes
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }

  return `${obj}`;
};
