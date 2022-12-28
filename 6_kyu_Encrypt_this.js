// 6 kyu Encrypt this!
// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

var encryptThis = function (text) {
  const resultArray = []
  // on transform la chaine en un tableau de mots
  const words = text.split(' ')

  // on boucle sur chaques mots
  words.map((item) => {
    // la premiere lettre de la chaine transformé
    const firstLetterTransformed = item[0].charCodeAt(0)

    // le reste de la chaine transformé
    const resteTransformed = item.substring(1).split('')
    const firstLetterReste = resteTransformed.shift()
    const lastLetterRest = resteTransformed.pop()
    resteTransformed.push(firstLetterReste)
    resteTransformed.unshift(lastLetterRest)

    resultArray.push(firstLetterTransformed + resteTransformed.join(''))
  })

  return resultArray.join(' ')
}

console.log(encryptThis('A'))
console.log(encryptThis('Hello'))
console.log(encryptThis('A wise old owl lived in an oak'))
console.log(encryptThis('lived'))
console.log(encryptThis('The more he saw the less he spoke'))
