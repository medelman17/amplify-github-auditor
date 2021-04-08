import {
  Issue as EventIssue,
  IssuesEvent,
} from "@octokit/webhooks-definitions/schema";
import {
  API,
  graphqlOperation,
  queries,
  mutations,
  GraphQLResult,
} from "../context";
import { Repository } from "./Repository";
import {
  GitHubIssue,
  GetGitHubIssueQuery,
  GetGitHubIssueQueryVariables,
  CreateGitHubIssueMutation,
  CreateGitHubIssueInput,
  GitHubIssueState,
  UpdateGitHubIssueInput,
  UpdateGitHubIssueMutation,
  CreateIssueAsigneeInput,
  CreateIssueAsigneeMutation,
  UpdateIssueAsigneeInput,
  UpdateIssueAsigneeMutation,
} from "../../../../amplify/API";
import { User } from "./User";

async function getGitHubIssueFromWebhookEvent(e: EventIssue) {
  const vars: GetGitHubIssueQueryVariables = { id: e.id.toString() };
  console.log("vars", vars);
  try {
    const result = (await API.graphql(
      graphqlOperation(queries.getGitHubIssue, { id: e.id.toString() })
    )) as GraphQLResult<GetGitHubIssueQuery>;
    return result.data.getGitHubIssue;
  } catch (err) {
    console.log(err);
  }
}

async function createGitHubIssueFromWebhookEvent(e: EventIssue) {
  const input: CreateGitHubIssueInput = {
    id: e.id.toString(),
    nodeId: e.node_id,
    apiUrl: e.url,
    htmlUrl: e.html_url,
    title: e.title,
    number: e.number,
    locked: e.locked,
    state:
      e.state === "closed" ? GitHubIssueState.CLOSED : GitHubIssueState.OPEN,
    body: e.body,
    authorId: e.user.id.toString(),
    repositoryId: "na",
  };
  try {
    const result = (await API.graphql(
      graphqlOperation(mutations.createGitHubIssue, { input })
    )) as GraphQLResult<CreateGitHubIssueMutation>;
    return result.data.createGitHubIssue;
  } catch (err) {
    console.log(err);
  }
}

async function updateGitHubIssue(input: UpdateGitHubIssueInput) {
  try {
    const result = (await API.graphql(
      graphqlOperation(mutations.updateGitHubIssue, { input })
    )) as GraphQLResult<UpdateGitHubIssueMutation>;
    return result.data.updateGitHubIssue;
  } catch (err) {
    console.log(err);
  }
}

export class Issue {
  constructor(protected issue: GitHubIssue) {}

  async assign(obj: User) {}

  async unassign(obj: User) {}

  async attach(obj: Repository) {
    console.log(
      `Attaching Issue (ID: ${this.issue.id}) to Repository (ID: ${obj.id})`
    );
    await this.update({ repositoryId: obj.id });
    console.log(
      `Issue (ID: ${this.issue.id}) Attached to Repository (ID: ${obj.id})`
    );
    return this;
  }

  protected async update(i: Omit<UpdateGitHubIssueInput, "id">) {
    const input: UpdateGitHubIssueInput = {
      id: this.issue.id,
      ...i,
    };
    this.issue = await updateGitHubIssue(input);
  }

  static async fromEvent(e: EventIssue): Promise<Issue> {
    try {
      console.log(`Checking for Issue with ID: ${e.id}`);
      let issue = await getGitHubIssueFromWebhookEvent(e);
      if (issue === null) {
        console.log(`Issue with ID: ${e.id} Not Found; Creating`);

        issue = await createGitHubIssueFromWebhookEvent(e);
        console.log(`Issue with ID: ${e.id} Created`);
      }
      console.log(`Issue with ID: ${e.id} Found; Returning`);
      return new Issue(issue);
    } catch (err) {
      console.log(err);
    }
  }
}
