// 6 kyu Codewars Leaderboard
// https://www.codewars.com/kata/5a57d101cadebf03d40000b9

// The codeWars leaderBoard
// https://www.codewars.com/users/leaderboard

const axios = require('axios')
const cheerio = require('cheerio')
const url = 'https://www.codewars.com/users/leaderboard'

const getLeaderboardHonor = async () => {
  // fetch data from the url
  const response = await axios
    .get(url, { headers: { 'Accept-Encoding': 'gzip,deflate,compress' } })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.error(error)
    })

  // parse the response
  const $ = cheerio.load(response)

  // trigger by classname & push in array
  const honorArray = []
  $('.honor').each(function (item) {
    honorArray[item] = $(this).text()
  })
  honorArray.join(',')

  //transform each string elem in a number elem
  const honorNumberArray = []
  honorArray.map((item) => {
    honorNumberArray.push(item.replace(',', '') * 1)
  })

  console.log(honorNumberArray)
  return honorNumberArray
}

getLeaderboardHonor()
