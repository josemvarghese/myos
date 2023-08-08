import { gql } from "apollo-server-express";
const typeDefs = gql`
type Post{
  id : ID
  tittle:String!,
  description:String
}
  type Query {
    hello: String
    getAllPosts:[Post]
    getPost(id:ID):Post
  }


 input PostInput{
    tittle:String!,
    description:String
  }
type Mutation {
  createPost(post:PostInput):Post
  removePost(id:ID):String
}


`;

export default typeDefs;