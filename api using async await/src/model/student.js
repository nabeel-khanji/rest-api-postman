const mongoose = require("mongoose");
const validator = require("validator");
const studentSchema = mongoose.Schema({
  name: { minlength: 3, type: String, require: true },
  email: {
    type: String,
    require: true,
    unique: [true, "Email id already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  phone: {
    type: Number,
    min: 10,
    require: true,
    unique: true,
  },
  address: {
    type: String,
    minlength: 7,
    require: true,
  },
});

// we will create a new collection 
const Student = mongoose.model('Student',studentSchema);


module.exports= Student;
