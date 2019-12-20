const router = require('express').Router();
const sessionController = require('./sessionController');

const loginRouter = () => {
    router.route('/')
        .post(sessionController.login)

    return router;
}

module.exports = loginRouter;