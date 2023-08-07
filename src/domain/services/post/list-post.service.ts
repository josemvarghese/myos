import { IPostRepository } from "../../interface/repositories/post-repository";
import { IListAllPost } from "../../interface/services/post.service";
import { IResponse } from "../../../dto/common.dto";

export class ListPost implements IListAllPost {
    private postRepository: IPostRepository;

    constructor(postRepository: IPostRepository) {
        this.postRepository = postRepository;
    }

    async execute(): Promise<IResponse> {
        return await this.postRepository.listAllPost();
    }
}