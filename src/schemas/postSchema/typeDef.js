import { gql } from 'apollo-server-express';

export const typeDef = gql`
    extend type Query {
        getAllPosts: [Post]
    }

    extend type Mutation {
        createPost(input: PostInput): Post
    }

    input PostInput {
        title: String,
        description: String,
        category_ids: [ID]
    }

    type Post {
        _id: ID,
        id: ID,
        title: String,
        description: String,
        category_ids: [ID],
        create_date: String,
        update_date: String
    }
`;