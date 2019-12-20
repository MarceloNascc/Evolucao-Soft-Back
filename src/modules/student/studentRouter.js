const router = require('express').Router();
const studentController = require('./studentController');
const auth = require('../../middlewares/auth');

const studentRouter = () => {
    router.route('/')
        .post(auth, studentController.store)
        .get(auth, studentController.index);

    router.route('/:id')
        .get(auth, studentController.show)
        .put(auth, studentController.update)
        .delete(auth, studentController.destroy);

    return router;
}

module.exports = studentRouter;