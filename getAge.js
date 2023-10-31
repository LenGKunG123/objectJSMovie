getAge(){
  const milliToday = Date.now()
  const milliBirthDate = this.date0fBirthdate.getTime() //convert date from parameter to millisecond
  const diffMilli = milliToday- milliBirthDate
  const dateOfDiffMilli = new Date(diffMilli)
  return dateOfDiffMilli.getFullYear() - 1970
}
