import { ApolloServer } from "apollo-server";

const server = new ApolloServer({ typeDefs: undefined, resolvers: undefined });

server
  .listen()
  .then(({ url }) => {
    console.log(`Server ready at ${url}`);
  })
  .catch((err) => console.log(err));
