import mongoose from "mongoose";

const coordinatorSchema = new mongoose.Schema({
    name: {
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
})

const careerSchema = new mongoose.Schema({
    career_code: {
        type: String,
        required: true,
        trim: true // permite quitar los espacios de más
    },
    career_name: {
        type: String,
        required: true,
        trim: true // permite quitar los espacios de más
    },
    description: {
        type: String,
        required: true,
        trim: true // permite quitar los espacios de más   
    },
    four_quarter_duration: {
        type: Number,
        required: true,
    },
    modality: {
        type: String,
        required: true,
        trim: true
    },
    creation_date: {
        type: Date,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    coordinator: {
        type: coordinatorSchema,
        required: true
    }
},
{
    timestamps: true
})

export default mongoose.model('careers', careerSchema)