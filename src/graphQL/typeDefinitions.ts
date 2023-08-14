import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Post {
    id: ID
    tittle: String!
    description: String
  }

  type Order {
    id: ID!
    productId: String!
    quantity: Int!
    orderBy: String
    orderConfirmed: Boolean 
  }

  type Product {
    id: ID
    title: String!
    description: String!
    pictureUrl: String!
    price: Float!
    totalQuantity: Int!
    status: Boolean!
  }
  type OrderInfo {
    id: ID!
    productId: String!
    quantity: Int!
    orderBy: String
    orderConfirmed: Boolean 
    title: String!
    description: String!
    pictureUrl: String!
    price: Float!
    totalQuantity: Int!
    status: Boolean!
  }

  type Query {
    hello: String
    getAllPosts: [Post]
    getPost(id: ID): Post
    getOrder(id: ID): OrderInfo
  }



  input PostInput {
    title: String!
    description: String
  }

  type Mutation {
    createPost(post: PostInput): Post
    removePost(id: ID): String
  }
`;

export default typeDefs;
