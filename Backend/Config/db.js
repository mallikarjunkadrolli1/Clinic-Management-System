const path = require('path')
const mongoose = require('mongoose');
const dotenv = require('dotenv') // To load environment variables from a .env file

const envPath = path.resolve(__dirname,'../.env')
dotenv.config({path:envPath});
const mongoDB_URL = process.env.MONGODB_URL;

if (!mongoDB_URL) {
  console.error('MongoDB URL not defined in environment variables');
  process.exit(1);
}

console.log("MONGODB_URL:", mongoDB_URL); // Log the MongoDB URL to verify

// Connect to MongoDB
mongoose.connect(mongoDB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Gracefully close MongoDB connection on application termination
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed gracefully');
    process.exit(0);
  } catch (error) {
    console.error('Error closing MongoDB connection:', error);
    process.exit(1);
  }
});
