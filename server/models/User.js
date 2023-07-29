// Import necessary modules from 'mongoose' and 'bcrypt'
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Create a schema using mongoose.Schema. Include fields for username, email and password
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
});

// Define a pre-save middleware on the 'userSchema'.
userSchema.pre('save', async function (next) {
  // If the user is new or the password is being modified, hash the password using bcrypt with 10 salt rounds.
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// Define a custom instance method 'isCorrectPassword' on the 'userSchema'
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Create a mongoose model named 'User' using the 'userSchema'
const User = model('User', userSchema);

// Export the 'User' model
module.exports = User;
