import mongoose from 'mongoose';

const user_Schema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['customer', 'seller'],
    default: 'customer'
  },
  profile_pic: {
    type: String,
    default: ""
  },
  is_verified: {
    type: Boolean,
    default: "false"
  },
  current_address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users_Address',
    required: true
  }
}, { timestamp: true })

export default mongoose.model("Users", user_Schema)