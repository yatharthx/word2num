const Small = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90
}

const Magnitude = {
  thousand: 1000,
  million: 1000000,
  billion: 1000000000,
  trillion: 1000000000000,
  quadrillion: 1000000000000000,
  quintillion: 1000000000000000000,
  sextillion: 1000000000000000000000,
  septillion: 1000000000000000000000000,
  octillion: 1000000000000000000000000000,
  nonillion: 1000000000000000000000000000000,
  decillion: 1000000000000000000000000000000000
}

function word2num(wordnum) {
  const wordnumArray = wordnum.split(/[\s-]+/)
  let n = 0
  let g = 0

  for (const numPart of wordnumArray) {
    let small = Small[numPart]

    if (small) {
      g += small
    } else if (numPart === 'hundred' && g !== 0) {
      g *= 100
    } else {
      small = Magnitude[numPart]

      if (small) {
        n += g * small
        g = 0
      } else {
        return numPart;
      }
    }
  }

  return n + g
}

module.exports = word2num
