const bcrypt = require('bcrypt')

const utils = {
    isEmpty: (str) => !str,
    isOnlyNumber: (str) => !str.match(/[^0-9]/),
    isValidLength: (str, length) => str.length >= length,
    isValidEmail: (str) => /\S+@\S+\.\S+/.test(str),
    isOnlyLetters: (str) => !str.match(/[^a-z ]/igm),
    isDoubleSpaced: (str) => str.match("  ") != null,
    isSpaced: (str) => str.match(/[ ]/) != null,
    isOnlyLettersAndDashs: (str) => !str.match(/[^0-9- ]/igm),
    isValidGender: (str) => !str.match(/[^mfo ]/igm),

    hashPassword: (password, saltRounds) => {
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(password, salt)
        return hash
    }
}

module.exports = utils;