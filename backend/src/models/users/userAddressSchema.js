import mongoose from 'mongoose';

const user_Address_Schema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  country: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  pin_code: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ['Home', 'Office'],
    default: 'Home'
  },
},)

export default mongoose.model("Users_Address", user_Address_Schema)