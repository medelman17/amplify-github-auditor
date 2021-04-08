const {
  makeRemoteExecutableSchema,
  introspectSchema,
} = require("graphql-tools");
const { setContext } = require("apollo-link-context");
const { HttpLink } = require("apollo-link-http");
const { ApolloServer } = require("apollo-server");
const { readFileSync } = require("fs");
const fetch = require("cross-fetch");

const apiKey = "da2-qnydoz53dbawpdc5iyq7p3o7da";
const apiUrl =
  "https://maiojokpqbhfdm7oesyi5o7qlq.appsync-api.us-east-1.amazonaws.com/graphql";

const http = new HttpLink({ uri: apiUrl, fetch });

const link = setContext((request, previousContext) => ({
  headers: {
    "x-api-key": apiKey,
  },
})).concat(http);

async function getSchema() {
  try {
    schema = await introspectSchema(link);
    return makeRemoteExecutableSchema({
      schema,
      link,
    });
  } catch (err) {
    console.log("err", err);
  }
}

getSchema().then((schema) => {
  const server = new ApolloServer({ schema });
  server.listen().then(({ url }) => {
    console.log(`GraphQL Playground ready at ${url}`);
  });
});
