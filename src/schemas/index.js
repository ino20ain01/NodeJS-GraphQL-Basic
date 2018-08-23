import { 
    typeDef as Category,
    resolvers as categoryResolvers
} from '../schemas/categorySchema';
import { gql } from 'apollo-server-express';

const defaultSchema = gql`
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`;

export const typeDefs = [defaultSchema, Category];
export const resolvers = Object.assign({}, categoryResolvers);