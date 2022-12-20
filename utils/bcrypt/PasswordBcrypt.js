const bcrypt = require('bcrypt');

const passHash = async(myPlaintextPassword) => {
    return await bcrypt.hash(myPlaintextPassword, 10)
}

const passVerify = async(myPlaintextPassword, encryptedPassword) => {
    return await bcrypt.compare(myPlaintextPassword, encryptedPassword);
}

module.exports = { passHash, passVerify}