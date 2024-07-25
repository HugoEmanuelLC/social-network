import mongoose from "mongoose";

const socialResponsesPosts = new mongoose.Schema({
    response: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    }
});