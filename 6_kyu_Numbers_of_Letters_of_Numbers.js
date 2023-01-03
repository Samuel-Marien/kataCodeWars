// 6 kyu Numbers of Letters of Numbers
// https://www.codewars.com/kata/599febdc3f64cd21d8000117/train/javascript

let resultsArray = []
function numbersOfLetters(integer) {
  if (resultsArray[resultsArray.length - 1] === 'four') {
    resultsArray = []
  }
  // Convert number into readable strings
  const numbersToReadableString = (num) => {
    switch (num) {
      case '0':
        return 'zero'
        break
      case '1':
        return 'one'
        break
      case '2':
        return 'two'
        break
      case '3':
        return 'three'
        break
      case '4':
        return 'four'
        break
      case '5':
        return 'five'
        break
      case '6':
        return 'six'
        break
      case '7':
        return 'seven'
        break
      case '8':
        return 'eight'
        break
      case '9':
        return 'nine'
        break
      default:
        break
    }
  }

  // Convert integers in array of elements
  const convertIntegers = (myInteger) => {
    return [`${myInteger}`][0].split('')
  }

  // Converter for array of numbers to a unique string
  const convert = (arrayToConvert) => {
    return arrayToConvert
      .map((item) => {
        return numbersToReadableString(item)
      })
      .join('')
  }

  // Loop
  if (integer === 4) {
    resultsArray.push('four')
  } else {
    resultsArray.push(convert(convertIntegers(integer)))
    numbersOfLetters(convert(convertIntegers(integer)).length)
  }

  return resultsArray
}

console.log(numbersOfLetters(1))
console.log(numbersOfLetters(4))
console.log(numbersOfLetters(12))
console.log(numbersOfLetters(60))
console.log(numbersOfLetters(37))
console.log(numbersOfLetters(311))
console.log(numbersOfLetters(999))
