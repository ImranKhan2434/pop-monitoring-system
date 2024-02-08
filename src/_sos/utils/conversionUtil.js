export const stringToObject = (str) => {
  return JSON.parse(str)
}
export const dateToMillis = (date) => {
  const d = new Date(date)
  return d.getTime()
}

export const getLastThirtyDays = () => {
  const days = []
  let date = new Date()
  let day1 = new Date(date).toUTCString()
  days.push(day1.slice(5, 7) + ' ' + day1.slice(8, 11))
  let d1 = new Date().setDate(date.getDate() - 5)
  let day2 = new Date(d1).toUTCString()
  days.push(day2.slice(5, 7) + ' ' + day2.slice(8, 11))
  let d2 = new Date().setDate(date.getDate() - 10)
  let day3 = new Date(d2).toUTCString()
  days.push(day3.slice(5, 7) + ' ' + day3.slice(8, 11))
  let d3 = new Date().setDate(date.getDate() - 15)
  let day4 = new Date(d3).toUTCString()
  days.push(day4.slice(5, 7) + ' ' + day4.slice(8, 11))
  let d4 = new Date().setDate(date.getDate() - 20)
  let day5 = new Date(d4).toUTCString()
  days.push(day5.slice(5, 7) + ' ' + day5.slice(8, 11))
  let d5 = new Date().setDate(date.getDate() - 25)
  let day6 = new Date(d5).toUTCString()
  days.push(day6.slice(5, 7) + ' ' + day6.slice(8, 11))
  let d6 = new Date().setDate(date.getDate() - 30)
  let day7 = new Date(d6).toUTCString()
  days.push(day7.slice(5, 7) + ' ' + day7.slice(8, 11))

  return days
}
export const getToday = () => {
  return new Date().getTime()
  // return new Date(date).toUTCString()
  // return day1.slice(5, 7) + ' ' + day1.slice(8, 11)
}
export const getThirtyThDay = () => {
  let date = new Date()
  return new Date().setDate(date.getDate() - 30)
  // let day30 = new Date(d30).toUTCString()
  // return day30.slice(5, 7) + ' ' + day30.slice(8, 11)
}
export const getSevenThThDay = () => {
  let date = new Date()
  return new Date().setDate(date.getDate() - 7)
  // let day30 = new Date(d30).toUTCString()
  // return day30.slice(5, 7) + ' ' + day30.slice(8, 11)
}
