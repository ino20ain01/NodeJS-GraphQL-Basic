import { gql } from 'apollo-server-express';

export const typeDef = gql`

    extend type Query {
        getAllCategories: [Category]
    }

    extend type Mutation {
        createCategory(input: CategoryInput): Category
    }

    input CategoryInput {
        title: String,
        description: String
    }

    type Category {
        _id: ID
        id: ID,
        title: String,
        description: String,
        create_date: String,
        update_date: String
    }
`;