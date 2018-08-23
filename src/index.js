import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import compression from 'compression';
import { PORT } from './constants/Config';
import { typeDefs, resolvers } from './schemas'

const app = express();

// compression file response
app.use(compression());

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
    console.log(`🚀  Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
