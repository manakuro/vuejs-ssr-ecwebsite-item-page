/**
 * store へ map する getter と setter を生成する関数
 *
 * @param {string} namespace  store の名前空間
 * @param {string} state      getter で使用する store の state 名
 * @param {string} action     setter で使用する store の action 名
 * @returns {{mapSetGet: (function(*=))}}
 */
export default function createMapHelpers(namespace, { state, action }) {
  const mapSetGet = maps => {
    const isObj = typeof maps === 'object'
    const mapKeys = isObj ? Object.keys(maps) : maps

    return mapKeys.reduce((obj, key) => {
      const path = [namespace, state].join('/')
      const stateProp = isObj ? maps[key] : key

      obj[key] = {
        get() {
          const splited = `${path}/${stateProp}`.split('/')
          return splited.reduce((acc, s) => acc[s], this.$store.state)
        },
        set(value) {
          this.$store.dispatch(`${namespace}/${action}`, { [stateProp]: value })
        },
      }
      return obj
    }, {})
  }
  return {
    mapSetGet,
  }
}
