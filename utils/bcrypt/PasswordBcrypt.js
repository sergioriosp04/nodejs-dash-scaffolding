const bcrypt = require('bcrypt');

const passHash = async(myPlaintextPassword) => {
    const pass = await bcrypt.hash(myPlaintextPassword, 10)
    return pass
}

const passVerify = async(myPlaintextPassword) => {
    return bcrypt.compare(myPlaintextPassword, 10);
}

module.exports = { passHash, passVerify}