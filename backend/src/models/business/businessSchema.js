import mongoose from "mongoose";

const business_Schema = new mongoose.Schema({
    seller_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Users',
        required : true
    },

    store_name : {
        type : String,
        required : true,
        unique : true
    },
    
    type : {
        type : String,
        enum : ["Individual" , "Small Business" , "Company"],
        default : "Individual"
    },

    registration_number : {
        type : Number,
        required : true,
        unique : true
    },

    description : {
        type : String,
        required : true
    },

    logo : {
        type : String,
        required : true
    },

    business_license : {
        type : String,
        required : true
    },

    government_id_type : {
        type : String,
        required : true
    },

    government_id : {
        type : String,
        required : true
    },

    is_verified : {
        type : Boolean,
        required : true
    },
});

export default mongoose.model("Business" , business_Schema);
