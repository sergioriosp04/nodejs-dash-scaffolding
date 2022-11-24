const bcrypt = require('bcrypt');

const passHash = async(myPlaintextPassword) => {
    const pass = await bcrypt.hash(myPlaintextPassword, 10)
    return pass
}

const passVerify = async(myPlaintextPassword, encryptedPassword) => {
    return await bcrypt.compare(myPlaintextPassword, encryptedPassword);
}

module.exports = { passHash, passVerify}