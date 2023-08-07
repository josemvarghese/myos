
import { IResponse } from '../../dto/common.dto';
import { IPost } from '../../data/interfaces/post';
import { IPostRepository } from '../interface/repositories/post-repository';
import { PostDto } from '../../dto/post.dto';

export class PostRepository implements IPostRepository {
    postDataSource: IPost;
    constructor(postDataSource: IPost) {
        this.postDataSource = postDataSource;
    }
    async createNewPost(newPost: PostDto): Promise<IResponse> {
        return this.postDataSource.createPost(newPost)
    }
    async listAllPost(): Promise<IResponse> {
        return this.postDataSource.getAllPosts()
    }
    async getPost(id: string): Promise<IResponse> {
        return this.postDataSource.getPost(id);
    }
    async deletePost(id: string): Promise<IResponse> {
        return this.postDataSource.deletePost(id);
    }
}