import { PostDto } from "../../../dto/post.dto";
import { IPostRepository } from "../../../domain/interface/repositories/post-repository";
import { INewPost } from "../../../domain/interface/services/post.service";
import { IResponse } from "../../../dto/common.dto";

export class NewPost implements INewPost {
    private postRepository: IPostRepository;

    constructor(postRepository: IPostRepository) {
        this.postRepository = postRepository;
    }

    async execute(newPost: PostDto): Promise<IResponse> {
        return await this.postRepository.createNewPost(newPost);
    }
}