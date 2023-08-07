import { PostDto } from "../../../dto/post.dto";
import { IResponse } from "../../../dto/common.dto";

export interface INewPost {
    execute(newPost: PostDto): Promise<IResponse>;
}
export interface IListAllPost {
    execute(): Promise<IResponse>;
}
export interface IPostInformation {
    execute(id: string): Promise<IResponse>;
}
export interface IRemovePost {
    execute(id: string): Promise<IResponse>;
}
