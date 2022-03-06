import { ApolloServer } from "apollo-server";
import { resolvers } from "./schema/resolvers";
import { typeDefs } from "./schema/type-defs";

const server = new ApolloServer({ typeDefs, resolvers, introspection: true });

server
  .listen()
  .then(({ url }) => {
    console.log(`Server ready at ${url}`);
  })
  .catch((err) => console.log(err));
