import { Schema, model } from "mongoose";

const userSchema  = new Schema({

    nombre:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    edad: Number

});

export default model('User', userSchema );