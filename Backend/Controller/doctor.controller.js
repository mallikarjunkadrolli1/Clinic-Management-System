const Doctor = require('../Models/doctor.model')

class DoctorController {
  async getAll(req, res) {
    const doctors = await Doctor.find()

    return res.status(200).json({message:"FETCHED",data:doctors})
      // Your code for getting all doctors
  }

  async loginUser(req, res) {
      // Your code for logging in a doctor
  }

  async addUser(req, res) {
      console.log("Request made")
    const { _name:name, _email:email, _speciality:speciality, _password:password } = req.body;
    console.log(name,email,speciality,password)

    if (!name || !email || !speciality || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check if the email already exists
        const existingDoctor = await Doctor.findOne({ _email: email });
        if (existingDoctor) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Hash the password

        // Create a new doctor
        const newDoctor = new Doctor({
            _name: name,
            _email: email,
            _speciality: speciality,
            _password: password
        });

        // Save the doctor to the database
        await newDoctor.save();

        return res.status(201).json({ message: 'Doctor registered successfully', doctor: newDoctor });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
      // Your code for registering a new doctor
  }

  async update(req, res) {
      // Your code for updating doctor information
  }

  async deleteById(req, res) {
      // Your code for deleting a doctor by ID
  }

  async getById(req, res) {
      // Your code for getting a doctor by ID
  }
}

module.exports = DoctorController;
