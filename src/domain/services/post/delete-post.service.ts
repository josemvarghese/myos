import { IPostRepository } from "../../interface/repositories/post-repository";
import { IRemovePost } from "../../interface/services/post.service";
import { IResponse } from "../../../dto/common.dto";

export class RemovePost implements IRemovePost {
    private postRepository: IPostRepository;

    constructor(postRepository: IPostRepository) {
        this.postRepository = postRepository;
    }

    async execute(id: string): Promise<IResponse> {
        return await this.postRepository.deletePost(id);
    }
}