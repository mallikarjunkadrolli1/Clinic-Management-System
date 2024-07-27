const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    _name: {
        type: String,
        required: true
    },
    _email: {
        type: String,
        required: true
    },
    _speciality: {
        type: String,
        required: true
    },
    _password: {
        type: String,
        required: true
    }
});

const Doctor = mongoose.model('Doctor',doctorSchema);
module.exports = Doctor;