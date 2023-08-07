import { IPostRepository } from "../../interface/repositories/post-repository";
import { IPostInformation } from "../../interface/services/post.service";
import { IResponse } from "../../../dto/common.dto";

export class PostInformation implements IPostInformation {
    private postRepository: IPostRepository;

    constructor(postRepository: IPostRepository) {
        this.postRepository = postRepository;
    }

    async execute(id:string): Promise<IResponse> {
        return await this.postRepository.getPost(id);
    }
}