import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { config } from './config.js';
import { resolvers } from './resolvers.js';
import { typeDefs } from './schemas.js';

const { port } = config;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: port,
  },
});

console.log(`Server launched at ${port} port. URL: ${url}`);
