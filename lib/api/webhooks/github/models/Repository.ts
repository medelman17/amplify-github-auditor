import { Repository as RepositoryEvent } from "@octokit/webhooks-definitions/schema";
import {
  GitHubRepository,
  GetGitHubRepositoryQueryVariables,
  GetGitHubRepositoryQuery,
  CreateGitHubRepositoryInput,
  CreateGitHubRepositoryMutation,
  UpdateGitHubRepositoryInput,
  UpdateGitHubRepositoryMutation,
} from "../../../../amplify/API";
import {
  API,
  graphqlOperation,
  queries,
  mutations,
  GraphQLResult,
} from "../context";

async function getGitHubRepositoryFromWebhookEvent(e: RepositoryEvent) {
  const vars: GetGitHubRepositoryQueryVariables = { id: e.id.toString() };
  try {
    const result = (await API.graphql(
      graphqlOperation(queries.getGitHubRepository, vars)
    )) as GraphQLResult<GetGitHubRepositoryQuery>;
    return result.data.getGitHubRepository;
  } catch (err) {
    console.log(err);
  }
}

async function createGitHubRepositoryFromWebhookEvent(e: RepositoryEvent) {
  const input: CreateGitHubRepositoryInput = {
    id: e.id.toString(),
    nodeId: e.node_id,
    apiUrl: e.url,
    htmlUrl: e.html_url,
    name: e.name,
    fullName: e.full_name,
    description: e.description,
    gitUrl: e.git_url,
    sshUrl: e.ssh_url,
  };
  try {
    const result = (await API.graphql(
      graphqlOperation(mutations.createGitHubRepository, { input })
    )) as GraphQLResult<CreateGitHubRepositoryMutation>;
    return result.data.createGitHubRepository;
  } catch (err) {
    console.log(err);
  }
}

async function updateGitHubRepository(i: UpdateGitHubRepositoryInput) {
  try {
    const result = (await API.graphql(
      graphqlOperation(mutations.updateGitHubRepository, i)
    )) as GraphQLResult<UpdateGitHubRepositoryMutation>;
    return result.data.updateGitHubRepository;
  } catch (err) {
    console.log(err);
  }
}

export class Repository {
  constructor(protected repository: GitHubRepository) {}

  static async fromEvent(e: RepositoryEvent) {
    try {
      console.log(`Checking for Repository with ID: ${e.id}`);
      let repository = await getGitHubRepositoryFromWebhookEvent(e);
      if (repository === null) {
        console.log(`Repository with ID: ${e.id} Not Found; Creating`);
        repository = await createGitHubRepositoryFromWebhookEvent(e);
        console.log(`Repository with ID: ${e.id} Created`);
      }
      console.log(`Repository with ID: ${e.id} Found; Returning`);
      return new Repository(repository);
    } catch (err) {
      throw err;
    }
  }

  get id() {
    return this.repository.id;
  }
}
