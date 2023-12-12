export function convertDateFormat(inputDate) {
   const dateObject = new Date(inputDate)
   const year = dateObject.getFullYear() % 100
   const month = dateObject.getMonth() + 1
   const day = dateObject.getDate()
   const formattedMonth = month < 10 ? `0${month}` : `${month}`
   const formattedDay = day < 10 ? `0${day}` : `${day}`
   const formattedDate = `${formattedMonth}.${formattedDay}.${year}`
   return formattedDate
}
