import test from 'ava'
import word2num from './'

test('should convert number words to numbers', t => {
  t.is(
    word2num('three hundred'),
    300
  )
  t.is(
    word2num('four million'),
    4000000
  )
  t.is(
    word2num('three hundred thousand'),
    300000
  )
  t.is(
    word2num('seven billion four hundred forty two'),
    7000000442
  )
  t.is(
    word2num('ten quadrillion ten thousand ten'),
    10000000000010010
  )
})

test('should throw an error on invalid number word', t => {
  const err = t.throws(function () {
    word2num('forti four')
  })
  t.is(err.message, 'forti is not a number.')
})
