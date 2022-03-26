export function strToArrOfStep(string, step) {
  if (string.length) {
    return [string.slice(0, 2), ...strToArrOfStep(string.slice(step), step)]
  }

  return []
}

export function getRGB(arr) {
  return arr.map(i => parseInt(i, 16))
}

export function getBlockFone(arr) {
  const result = arr.map(i => parseInt(i, 16))
   return result.map((i) => {
     return (i-30) < 0 ? i : i-30
   })
}

export function convertColorToRGB(hexData, currentRGB) {

  if (hexData.length === 7) {
    const regExp = /[а-яё]/i
    const rgbArr = strToArrOfStep(hexData.slice(1), 2)
    const error = rgbArr.find(item => isNaN(parseInt(item, 16)) || regExp.test(item))

    if (error || hexData[0]!=="#") {
      return false
    }

    return getRGB(rgbArr)
  } else if (hexData.length > 7) {

    return false
  }

  return currentRGB
}
