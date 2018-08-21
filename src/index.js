import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import compression from 'compression';
import { PORT } from './constants/Config';

const typeDefs = gql`
    type Query {
        hello: String,
        itMe: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
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
