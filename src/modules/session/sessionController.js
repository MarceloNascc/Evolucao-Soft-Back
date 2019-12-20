const { User } = require('../../models');

const login = async (req, res) => {
    const { nome, senha } = req.body;

    try {
        const user = await User.findOne({ where: { nome } });

        if(!user) {
            return res.status(401).json({ message: 'name or password incorrect' });
        }

        if(!(await user.checkPassword(senha))) {
            return res.status(401).json({ message: 'name or password incorrect' });
        }

        return res.status(201).json({
            token: user.generateToken()
        });
    } catch (error) {
        console.log(`ERROR ON LOGIN-SESSION\n${error}\n`);
        return res.status(500).json({message: 'Internal error'});
    }
}

module.exports = {
    login
}