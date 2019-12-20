const { Student } = require('../../models');

const store = async (req, res) => {
    try {
        const student = await Student.create(req.body);

        return res.status(201).json(student);
    } catch (error) {
        console.log(`ERROR ON STORE-STUDENT:\n${ error }`);
        return res.status(500).json({message: 'Internal error'}); 
    }
};

const index = async (req, res) => {
    try {
        const students = await Student.findAll();

        return res.status(200).json(students);
    } catch (error) {
        console.log(`ERROR ON INDEX-STUDENT:\n${ error }`);
        return res.status(500).json({message: 'Internal error'});
    }
};

const show = async (req, res) => {
    const { id } = req.params;

    try {
        const student = await Student.findOne({ where: { id } });

        if(!student) {
            return res.status(404).json({ message: 'student not founded' });
        }

        return res.status(200).json(student);
    } catch (error) {
        console.log(`ERROR ON SHOW-STUDENT:\n${ error }`);
        return res.status(500).json({message: 'Internal error'});
    }
};

const update = async (req, res) => {
    const { id } = req.params;

    try {
        const student = await Student.update(req.body, { 
            where: { id },
            returning: true
        });

        if(student[0] < 1){
            return res.status(404).json({ message: 'student not founded' });
        }

        return res.status(200).json(student[1][0]);
    } catch (error) {
        console.log(`ERROR ON UPDATE-STUDENT:\n${ error }`);
        return res.status(500).json({message: 'Internal error'});
    }
};

const destroy = async (req, res) => {
    const { id } = req.params;

    try {
        const student = await Student.findOne({ where: { id } });

        if(!student) {
            return res.status(404).json({ message: 'student not founded' });
        }

        await student.destroy();

        return res.status(200).json({message: 'student removided'});
    } catch (error) {
        console.log(`ERROR ON DESTROY-STUDENT:\n${ error }`);
        return res.status(500).json({message: 'Internal error'});
    }
};

module.exports = {
    store,
    index,
    show,
    update,
    destroy
};