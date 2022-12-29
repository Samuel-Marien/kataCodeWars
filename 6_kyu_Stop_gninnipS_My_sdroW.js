// 6 kyu Stop gninnipS My sdroW!
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string) {
  // on transform la chaine en un tableau de mots
  // on repere le mot qui a plus de 5 lettres
  // on repere son placement (index)
  const resultArray = []
  string.split(' ').map((item, index) => {
    if (item.length > 4) {
      resultArray.push({ item, index })
    }
  })

  // on transform les mots trouvé
  // on recupere l'index initial
  const newWords = resultArray.map((newWord) => {
    const initialIndex = newWord.index
    const reversedWord = newWord.item.split('').reverse().join('')
    return { reversedWord, initialIndex }
  })

  // on map sur newWords
  // on repere le placement
  // on substitue par le newWord dans le str initial
  const newArray = string.split(' ')

  const result = newWords.map((a) => {
    if (newWords.length > 0) {
      return newArray.splice([a.initialIndex], 1, a.reversedWord)
    }
  })

  // console.log(newWords)
  // console.log(resultArray)
  // console.log(newArray.join(' '))
  // console.log(result)
  return newArray.join(' ')
}

spinWords('hey')
spinWords('Welcome')
spinWords('Hey fellow warriors')
spinWords('This is another test')
spinWords('This is another fabulous test')
spinWords('Just kidding there is still one more')
