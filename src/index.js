import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import compression from 'compression';
import { PORT } from './constants/Config';
import { Category } from './connectors';

const typeDefs = gql`
    type Query {
        hello: String,
        itMe: String
    },
    type Mutation {
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

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
    Mutation: {
        createCategory(root, { input: CategoryInput}) {
            return Category.create(CategoryInput);
        }
    }
}

const app = express();

// compression file response
app.use(compression());

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
    console.log(`🚀  Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
