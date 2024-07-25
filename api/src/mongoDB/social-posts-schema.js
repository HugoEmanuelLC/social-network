import mongoose from "mongoose";

const socialPosts = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        require: [true, 'description is required'],
        unique: true
    },
    image: {
        type: String,
        require: false,
        unique: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    responses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'responses'
    }],
    socialSpace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'social-space-infos'
    }
});

const SocialPosts = mongoose.model('social-posts', socialPosts);
export default SocialPosts;