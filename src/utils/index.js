export function parse(val) {
  if (Array.isArray(val)) {
    return val.map(v => parse(v))
  }
  return !isNaN(val) ? parseInt(val) : val
}

export function toInt(obj) {
  Object.keys(obj).forEach(key => {
    obj[key] = parse(obj[key])
  })
  return obj
}
