import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true // permite quitar los espacios de más
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
}, 
{
    timestamps: true 
});

export default mongoose.model('User', usersSchema)