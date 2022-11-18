const get = async(req, res, next) => {
    try {
        res.json({
            message : "",
            data: {},
        })   
    } catch (error) {
        next(error)
    }
}

const create = async(req, res, next) => {
    try {
        res.json({
            message : "",
            data: {},
        })   
    } catch (error) {
        next(error)
    }
}

module.exports = { create, get }