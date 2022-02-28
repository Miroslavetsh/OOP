const pad = (unit) => (unit < 10 ? '0' + unit : unit.toString())

const getMinutesFromFormattedTime = (time) => {
  const [hh, mm] = time.split(/:/gi)

  return parseInt(hh) * 60 + parseInt(mm)
}

const getFormattedTimeFromMinutes = (minutes) => {
  const hh = Math.floor(minutes / 60)
  const mm = minutes % 60

  return `${pad(hh)}:${pad(mm)}`
}

const solve = (arr) => {
  const intervals = [...new Set(arr)].sort(
    (a, b) => getMinutesFromFormattedTime(b) - getMinutesFromFormattedTime(a),
  )
  const smallest = intervals[intervals.length - 1]
  const biggest = intervals[0]

  return getFormattedTimeFromMinutes(
    getMinutesFromFormattedTime('23:59') -
      (getMinutesFromFormattedTime(biggest) - getMinutesFromFormattedTime(smallest)),
  )
}

console.log(solve(['21:14', '15:34', '14:51', '06:25', '15:30']))
console.log(solve(['23:00', '04:22', '18:05', '06:24']))

module.exports = {
  getMinutesFromFormattedTime,
  getFormattedTimeFromMinutes,
  pad,
}
