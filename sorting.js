const sutdents = [
  {id: 1, name: "John Lee"},
  {id: 10, name: "adam Smith"}
  {id: 100, name: "Ann Smith"},
  {id: 2, name: "julia Smith"},
]
//เรียงID
console.log(sutdents.sort((a,b) => a.id - b.id))
console.log(sutdents.sort((a,b) => b.id - a.id))

//เรียงชื่อ
console.log(
  student.sort((std1, std2) =>{
    const name1 = std1.name.toLowerCase()
    const name2 = std1.name.toLowerCase()
    if(name1 > name2)
      return 1
    else if (name1 < name2)
      retur -1
    else return 0
  })
)


const numString = num
