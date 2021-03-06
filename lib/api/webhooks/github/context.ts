import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
export type { GraphQLResult } from "@aws-amplify/api";
import * as Sentry from "@sentry/node";

const apiconfig = {
  aws_appsync_graphqlEndpoint:
    "https://maiojokpqbhfdm7oesyi5o7qlq.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-qnydoz53dbawpdc5iyq7p3o7da",
};

API.configure(apiconfig);

export function createTransaction(name: string) {
  const tx = Sentry.startTransaction({ name });
  Sentry.configureScope((scope) => {
    scope.setSpan(tx);
  });
  return tx;
}

export { API, graphqlOperation, queries, mutations };
