import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
    tittle: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

const PostModel = mongoose.model('post', postSchema, "post");
export default PostModel;