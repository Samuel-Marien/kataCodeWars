// 6 kyu HTML dynamic color string generation

var generateColor = function () {
  const array = []
  for (let i = 0; i < 6; i++) {
    array.push(Math.floor(Math.random() * 16).toString(16))
  }

  return `#${array.join('')}`
}
