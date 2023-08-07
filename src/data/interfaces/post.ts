import { PostDto } from "../../dto/post.dto";
import { IResponse } from "../../dto/common.dto";

export interface IPost {
    createPost(postInfo: PostDto): Promise<IResponse>;
    getAllPosts(): Promise<IResponse>;
    getPost(id:string): Promise<IResponse>;
    deletePost(id:string): Promise<IResponse>;
}