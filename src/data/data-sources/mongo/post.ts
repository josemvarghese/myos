import { IResponse } from '../../../dto/common.dto';
import PostModel from '../../../data/model/mongo/post.model';
import { IPost } from '../../../data/interfaces/post';
import { PostDto } from '../../../dto/post.dto';
import mongoose from 'mongoose';
export class PostDataSource implements IPost {

    async createPost(postData: PostDto): Promise<IResponse> {
        try {
            const newPost = new PostModel(postData)
            const data = await newPost.save();
            const resData: IResponse = { status: true, message: "Your post created successfully", data };
            return resData;
        } catch (error: any) {
            const data: IResponse = { status: false, message: error.message };
            return data;
        }
    }
    async getAllPosts(): Promise<IResponse> {
        try {
            console.log("Reached here");
            const data: IPost[] = await PostModel.find();
            console.log("🚀 ~ file: post.ts:24 ~ PostDataSource ~ getAllPosts ~ data:", data)

            const resData: IResponse = { status: true, message: "List of posts", data };
            return resData;
        } catch (error: any) {
            const data: IResponse = { status: false, message: error.message };
            console.log("🚀 ~ file: post.ts:30 ~ PostDataSource ~ getAllPosts ~ error.message:", error.message)
            return data;
            
        }
    }
    async getPost(id: string): Promise<IResponse> {
        try {
            const data: IPost = await PostModel.findOne({ _id: new mongoose.Types.ObjectId(id) });
            const resData: IResponse = { status: true, message: "Post details", data };
            return resData;
        } catch (error: any) {
            const data: IResponse = { status: false, message: error.message };
            return data;
        }
    }
    async deletePost(id: string): Promise<IResponse> {
        try {
            await PostModel.deleteOne({ _id: new mongoose.Types.ObjectId(id) });
            const resData: IResponse = { status: true, message: "post deleted" };
            return resData;
        } catch (error: any) {
            const data: IResponse = { status: false, message: error.message };
            return data;
        }
    }
}