import { PostDataSource } from "../data/data-sources/mongo/post";
import { PostRepository } from "../domain/repositories/post.repository";
import { ListPost } from "../domain/services/post/list-post.service";
import { NewPost } from "../domain/services/post/new-post.service";
import { IResponse } from "../dto/common.dto";

const resolvers = {
  Query: {
    hello: () => 'world',
    getAllPosts: async () => {
      const postDataSource: PostDataSource = new PostDataSource();
      const postRepository: PostRepository = new PostRepository(postDataSource);
      const productList: ListPost = new ListPost(postRepository);
      const res: IResponse = await productList.execute();
      return res.data;
    }
  },
  Mutation: {
    createPost: async (parent: any, args: any, context: any, info: any) => {
      const { tittle, description } = args.post
      const postDataSource: PostDataSource = new PostDataSource();
      const postRepository: PostRepository = new PostRepository(postDataSource);
      const newPost: NewPost = new NewPost(postRepository);
      const res: IResponse = await newPost.execute({ tittle, description });
      return res.data;
    }
  }




};


export default resolvers;