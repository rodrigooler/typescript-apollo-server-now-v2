import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello() {
      return "Hello World!";
    }
  }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default apolloServer.createHandler();
