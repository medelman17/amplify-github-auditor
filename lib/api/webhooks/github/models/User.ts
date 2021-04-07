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
} from "@/amplify/API";

export class User {
  user: GitHubUser | null;

  constructor(protected _user: EventUser) {
    this.init();
  }

  private async init() {
    this.user = await this.getUser();
    if (this.user === null) {
      console.log(`User doesn't exist; creating new user: ${this._user.login}`);
      this.user = await this.createUser();
    }
    console.log(`User initialized: ${this.user.login}`);
  }

  protected async getUser() {
    const variables = this.getGitHubUserQueryVariables();
    try {
      const result = (await API.graphql(
        graphqlOperation(queries.getGitHubUser, variables)
      )) as GraphQLResult<GetGitHubUserQuery>;
      return result.data.getGitHubUser;
    } catch (err) {
      console.log(err);
    }
  }

  private async createUser() {
    const input = this.getCreateGitHubUserMutationInput();
    try {
      const result = (await API.graphql(
        graphqlOperation(mutations.createGitHubUser, { input })
      )) as GraphQLResult<CreateGitHubUserMutation>;

      return result.data.createGitHubUser;
    } catch (err) {
      console.log(err);
    }
  }

  protected getCreateGitHubUserMutationInput(): CreateGitHubUserInput {
    return {
      id: this._user.id.toString(),
      login: this._user.login,
      nodeId: this._user.node_id,
      apiUrl: this._user.url,
      htmlUrl: this._user.html_url,
      avatar: this._user.avatar_url,
      name: this._user.name,
    };
  }

  protected getGitHubUserQueryVariables(): GetGitHubUserQueryVariables {
    return {
      id: this._user.id.toString(),
      login: this._user.login,
    };
  }
}

export function isEventUser(u: any): u is EventUser {
  return (u as EventUser).type === "User";
}
