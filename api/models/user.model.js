import { Timestamp } from 'bson'
import mongoose from 'mongoose'

const userSchema = new mongoose.schema({
    username:{
        type:String,
        required: true,
        uniqe: true
    },
    email:{
        type:String,
        required: true,
        uniqe: true
    },
    password:{
        type:String,
        required: true,
    }
}, {timestamps:true});

const User = mongoose.model('User',userSchema);

export default User;