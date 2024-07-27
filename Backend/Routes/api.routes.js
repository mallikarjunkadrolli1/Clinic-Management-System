const express = require('express')
const router = express.Router()

router.use('/users',require('./users.routes'))
router.use('/doctor',require('./doctor.routes'))
router.use('/appointment',require('./appointment.routes'))

module.exports = router