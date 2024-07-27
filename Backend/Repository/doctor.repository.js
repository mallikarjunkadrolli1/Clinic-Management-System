const BaseRepository = require('./base.repository')
const Doctor = require('../Models/doctor.model')

class DoctorRepository extends BaseRepository{
    constructor(){
        super(Doctor)
    }
}

module.exports = DoctorRepository