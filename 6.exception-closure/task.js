'use strict'
function parseCount(x) {
  let parsed = Number.parseInt(x);
  if (isNaN(parsed))
    throw new Error("Невалидное значение");
  else
    return parsed;
}

function validateCount(x) {
  try {
    function parseCount(x) {
      let parsed = Number.parseInt(x);
      if (isNaN(parsed))
        throw new Error("Невалидное значение");
      else
        return parsed;
    }
    return parseCount(x);
  }
  catch (err) {
    return err;
  }
}
console.log(validateCount('nhg123'));
