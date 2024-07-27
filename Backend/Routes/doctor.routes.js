const express = require('express');
const protect = require('../Middlewares/protect');
const DoctorController = require('../Controller/doctor.controller'); // Import the class

const router = express.Router();
const doctorController = new DoctorController(); // Instantiate the class

console.log("I am at the Doctors part");

router.get('/getAll', (req, res, next) => {
    doctorController.getAll(req, res).catch(next);
});


router.post('/login', (req, res, next) => {
    doctorController.loginUser(req, res).catch(next);
});

router.post('/register', (req, res, next) => {
    doctorController.addUser(req, res).catch(next);
});

router.put('/update/:id', protect, (req, res, next) => {
    doctorController.update(req, res).catch(next);
});

router.post('/addUser',doctorController.addUser)

router.delete('/delete/:id', protect, (req, res, next) => {
    doctorController.deleteById(req, res).catch(next);
});

router.get('/getById/:id', (req, res, next) => {
    doctorController.getById(req, res).catch(next);
});

module.exports = router;
