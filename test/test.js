const assert = require('assert')

const { getMinutesFromFormattedTime, getFormattedTimeFromMinutes, pad } = require('..')

describe('Time to Minutes function', () => {
  it('should convert time to number with hours times 60 plus minutes', () => {
    assert.deepEqual(getMinutesFromFormattedTime('23:59'), 60 * 23 + 59)
  })
})

describe('Minutes to Time function', () => {
  it('should convert number of hours and minutes to readable string format', () => {
    assert.deepEqual(getFormattedTimeFromMinutes(61), '01:01')
  })
})

describe('Pad function', () => {
  it('should return string formatted with zero if number is less than 10', () => {
    assert.deepEqual(pad('9'), '09')
  })

  it('should return string formatted without zero if number is larger than or equal 10', () => {
    assert.deepEqual(pad(10), '10')
  })
})
