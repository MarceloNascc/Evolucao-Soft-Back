const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
    const tokenHeader = req.headers.authorization;

    if(!tokenHeader) {
        return res.status(401).json({ message: 'token not provided' });
    }

    const [, token] = tokenHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.SECRET);

        req.usuarioID = decoded.id;

        return next();
    } catch (error) {
        console.log(`ERROR ON MIDDLEWARE-AUTH\n${error}\n`);
        return res.status(401).json({ message: 'token invalid' });
    }
};