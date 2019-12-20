const router = require('express').Router();
const userController = require('./userController');

const clienteRouter = () => {
    router.route('/')
        .post(userController.store)

    return router;
}

module.exports = clienteRouter;