// 6 kyu Statistics for an Athletic Association
//www.codewars.com/kata/55b3425df71c1201a800009c/train/javascript

function stat(strg) {
  // Convert seconds to hh:mm:ss format
  function toTime(seconds) {
    let date = new Date(null)
    date.setSeconds(seconds)
    return date.toISOString().substring(11, 19).replace(/:/g, '|')
  }

  function timeToSeconds(array) {
    return array.map((item) => {
      const dataSplited = item.split('|')
      const hour = dataSplited[0] * 3600
      const min = dataSplited[1] * 60
      const sec = dataSplited[2] * 1
      const result = hour + min + sec
      return result
    })
  }

  // Separate items in array
  const resultsArray = strg.split(',')

  // Range:
  const rangeResults = timeToSeconds(resultsArray).sort((a, b) => a - b)
  const rangeResult = toTime(
    rangeResults[rangeResults.length - 1] - rangeResults[0]
  )

  // Average:
  const averageResults = timeToSeconds(resultsArray).reduce((a, b) => a + b)
  const averageResult = toTime(Math.floor(averageResults / resultsArray.length))

  // Median:
  let medianResult = ''
  const medianResultsSorted = timeToSeconds(resultsArray).sort((a, b) => a - b)
  // if odd:
  if (resultsArray.length % 2 !== 0) {
    const middleValueIndex = (resultsArray.length + 1) / 2
    medianResult = toTime(medianResultsSorted[middleValueIndex - 1])
    //if even
  } else {
    const firstMiddleValueIndex = medianResultsSorted.length / 2 - 1
    const firstMiddleValue = medianResultsSorted[firstMiddleValueIndex]
    const secondMiddleValue = medianResultsSorted[firstMiddleValueIndex + 1]
    medianResult = toTime(
      Math.floor((secondMiddleValue + firstMiddleValue) / 2)
    )
  }

  return `Range: ${rangeResult} Average: ${averageResult} Median: ${medianResult}`
}

console.log(stat('01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17'))
console.log(
  stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41')
)
console.log(stat('0|15|59, 0|16|16, 0|17|20, 0|22|34, 0|19|34, 0|15|0'))
