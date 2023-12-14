// 65130500043 Pannawat Sripa
function isPasswordValid(password) {
    // if (password === null || password === undefined || password === "") {
    //     return false
    // }

    // let letters = [...password]
    // if (letters.length < 8) {
    //     return false
    // } else {
    //     for (let letter of letters) {
    //         if (
    //             letter.includes("@") ||
    //             letter.includes("#") ||
    //             letter.includes("$") ||
    //             letter.includes("%") ||
    //             letter.includes("^") ||
    //             letter.includes("&") ||
    //             letter.includes("*") ||
    //             letter.includes("!")
    //         ) {
    //             return true
    //         } else {
    //             return false
    //         }
    //     }
    // }
    return password?.length >= 8
        ? /[a-z]/.test(password) &&
              /[A-Z]/.test(password) &&
              /\d/.test(password) &&
              /[@#$%^&*!]/.test(password)
        : false
}

module.exports = isPasswordValid
