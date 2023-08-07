import { PostDto } from "../../../dto/post.dto";
import { IResponse } from "../../../dto/common.dto";

export interface IPostRepository {
    createNewPost(postInfo: PostDto): Promise<IResponse>;
    listAllPost(): Promise<IResponse>;
    getPost(id: string): Promise<IResponse>;
    deletePost(id: string): Promise<IResponse>;
}


