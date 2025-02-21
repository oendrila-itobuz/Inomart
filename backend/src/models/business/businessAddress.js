import mongoose from "mongoose";

const business_Address_Schema = new mongoose.Schema({
    seller_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Business",
        required : true
    },

    country : {
        type : String,
        required : true
    },

    street : {
        type : String,
        required : true
    },

    city : {
        type : String,
        required : true
    },

    state : {
        type : String,
        required : true
    },
    
    zipcode : {
        type : Number,
        required : true,
    },

    adrress_proof : {
        type : String,
        required : true
    }
});

export default mongoose.model("Business_Address" , business_Address_Schema);
