import { createNewPost, listAllPost, postInfo, deletePost } from "../presentation/routers/components/post/post.controller";
const resolvers = {
  Query: {
    hello: () => 'world',
    getAllPosts: async () => {
      return await listAllPost();
    },
    getPost: async (parent: any, args: any, context: any, info: any) => {
      return await postInfo(parent, args, context, info);
    }
  },
  Mutation: {
    createPost: async (parent: any, args: any, context: any, info: any) => {
      return await createNewPost(parent, args, context, info)
    },
    removePost: async (parent: any, args: any, context: any, info: any) => {
      return await deletePost(parent, args, context, info)
    }
  }
};


export default resolvers;