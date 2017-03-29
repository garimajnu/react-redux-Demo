function _isEmpty(data) {
  return !data || String(data).trim() === ''
}

function _validateRequired(input) {
  return !_isEmpty(input)
}

var validators = {
  required: _validateRequired
}

function validate(input, validationsToBeMade) {
  var errorCodes = []
  if (!validationsToBeMade || validationsToBeMade.length === 0) {
    return errorCodes
  }
  validationsToBeMade.forEach(function (validationConfig) {
    var validator = validators[validationConfig['type']]
    if (validator && !validator(input, validationConfig) && errorCodes.length == 0) {
      errorCodes.push(validationConfig['error_code'])
    }
  })
  return errorCodes
}

module.exports = {
  validate
}