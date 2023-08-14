import { PostDataSource } from '../../../../data/data-sources/mongo/post';
import { PostRepository } from '../../../../domain/repositories/post.repository';
import { ListPost } from '../../../../domain/services/post/list-post.service';
import { PostInformation } from '../../../../domain/services/post/post-information.service';
import { RemovePost } from '../../../../domain/services/post/delete-post.service';
import { IResponse } from '../../../../dto/common.dto';
import { NewPost } from '../../../../domain/services/post/new-post.service';

export const listAllPost = async () => {
    const postDataSource: PostDataSource = new PostDataSource();
    const postRepository: PostRepository = new PostRepository(postDataSource);
    const productList: ListPost = new ListPost(postRepository);
    const res: IResponse = await productList.execute();
    return res.data;
}

export const createNewPost = async (parent: any, args: any, context: any, info: any) => {
    const { tittle, description } = args.post
    const postDataSource: PostDataSource = new PostDataSource();
    const postRepository: PostRepository = new PostRepository(postDataSource);
    const newPost: NewPost = new NewPost(postRepository);
    const res: IResponse = await newPost.execute({ tittle, description });
    return res.data;
}
export const postInfo = async (parent: any, args: any, context: any, info: any) => {
    const { id } = args
    console.log("🚀 ~ file: post.controller.ts:27 ~ postInfo ~ id:", id)
    const postDataSource: PostDataSource = new PostDataSource();
    const postRepository: PostRepository = new PostRepository(postDataSource);
    const postInformation: PostInformation = new PostInformation(postRepository);
    const res: IResponse = await postInformation.execute(id);
    console.log("🚀 ~ file: post.controller.ts:33 ~ postInfo ~ res.data:", res.data)
    return res.data;
    
}

export const deletePost = async (parent: any, args: any, context: any, info: any) => {
    const { id } = args
    const postDataSource: PostDataSource = new PostDataSource();
    const postRepository: PostRepository = new PostRepository(postDataSource);
    const removePost: RemovePost = new RemovePost(postRepository);
    const res: IResponse = await removePost.execute(id);
    return res.data;
}