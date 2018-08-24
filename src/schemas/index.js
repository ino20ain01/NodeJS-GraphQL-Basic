import { gql } from 'apollo-server-express';
import { merge } from 'lodash';

import { 
    typeDef as Category,
    resolver as categoryResolver
} from '../schemas/categorySchema';

import { 
    typeDef as Post,
    resolver as postResolver
} from '../schemas/postSchema';

const defaultSchema = gql`
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`;

export const typeDefs = [defaultSchema, Category, Post];
export const resolvers = merge(categoryResolver, postResolver);