import mongoose from 'mongoose';

const user_Bank_Details_Schema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  user_name: {
    type: String,
    required: true
  },
  bank_name: {
    type: String,
    required: true
  },
  branch_name: {
    type: String,
    required: true
  },
  account_number: {
    type: String,
    required: true
  },
  ifsc_code: {
    type: String,
    required: true
  }
},)

export default mongoose.model("Bank_Details", user_Bank_Details_Schema)