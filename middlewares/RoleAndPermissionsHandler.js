const checkRole = (req, res, next) => {
    const user = req.user
    if (user.role === 'admin') {
        next()
    } else {
        next({
            status: 403,
            message: 'Not Authorized'
        })
    }
}

const checkRoles = (...roles) => {
    return (req, res, next) => {
        const user = req.user
        if (user.role === 'admin') {
            next()
        } else {
            next({
                status: 403,
                message: 'Not Authorized'
            })
        }
    }
}

module.exports = { checkRole }