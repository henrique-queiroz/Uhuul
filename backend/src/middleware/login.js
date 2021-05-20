const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_KEY)
        req.user = decode
        next()
    } catch (error) {
        res.statusCode = 401
        res.json({
            status: false,
            msg: 'Autenticação falhou'
        })
    }
}