import { User as EventUser } from "@octokit/webhooks-definitions/schema";

import {
  API,
  graphqlOperation,
  queries,
  mutations,
  GraphQLResult,
} from "../context";
import {
  GetGitHubUserQueryVariables,
  GetGitHubUserQuery,
  CreateGitHubUserInput,
  CreateGitHubUserMutation,
  GitHubUser,
  UpdateGitHubUserInput,
  UpdateGitHubUserMutation,
} from "../../../../amplify/API";

async function getGitHubUserFromWebhookEvent(e: EventUser) {
  const vars: GetGitHubUserQueryVariables = {
    id: e.id.toString(),
  };
  try {
    const result = (await API.graphql(
      graphqlOperation(queries.getGitHubUser, vars)
    )) as GraphQLResult<GetGitHubUserQuery>;
    return result.data.getGitHubUser;
  } catch (err) {
    console.log(err);
  }
}

async function createGitHubUserFromWebhookEvent(e: EventUser) {
  const input: CreateGitHubUserInput = {
    id: e.id.toString(),
    nodeId: e.node_id,
    apiUrl: e.url,
    htmlUrl: e.html_url,
    login: e.login,
    avatar: e.avatar_url,
    name: e.name,
  };
  try {
    const result = (await API.graphql(
      graphqlOperation(mutations.createGitHubUser, { input })
    )) as GraphQLResult<CreateGitHubUserMutation>;
    return result.data.createGitHubUser;
  } catch (err) {
    console.log(err);
  }
}

async function updateGitHubUser(i: UpdateGitHubUserInput) {
  try {
    const result = (await API.graphql(
      graphqlOperation(mutations.updateGitHubUser, i)
    )) as GraphQLResult<UpdateGitHubUserMutation>;
    return result.data.updateGitHubUser;
  } catch (err) {
    console.log(err);
  }
}

export function isEventUser(u: any): u is EventUser {
  return (u as EventUser).type === "User";
}

export class User {
  constructor(protected user: GitHubUser) {}

  static async fromEvent(e: EventUser): Promise<User> {
    try {
      let user = await getGitHubUserFromWebhookEvent(e);
      if (user === null) {
        user = await createGitHubUserFromWebhookEvent(e);
      }
      return new User(user);
    } catch (err) {
      console.log(err);
    }
  }
}
