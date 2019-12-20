const { User } = require('../../models');

const store = async (req, res) => {
    try {
        const user = await User.create(req.body);

        return res.status(201).json({
            token: user.generateToken()
        });
    } catch (error) {
        console.log(`ERROR ON STORE-USER\n${error}\n`);
        return res.status(500).json({message: 'Internal error'});
    }
};

module.exports = {
    store
};