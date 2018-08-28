export const serializeReqParams = (params = {}) => {
  const keys = Object.keys(params)
  return keys.reduce((obj, cur) => {
    if (typeof params[cur] === 'string') {
      if (params[cur].length > 0) {
        obj[cur] = params[cur]
      }
    } else if (typeof params[cur] !== 'undefined') {
      obj[cur] = params[cur]
    }
    return obj
  }, {})
}
