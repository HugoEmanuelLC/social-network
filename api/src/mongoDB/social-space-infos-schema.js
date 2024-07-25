import mongoose from 'mongoose';

const socialSpaceInfos = new mongoose.Schema({
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
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    }],
});

const SocialSpaceInfos = mongoose.model('social-space-infos', socialSpaceInfos);
export default SocialSpaceInfos;