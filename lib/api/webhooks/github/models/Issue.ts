import {
  Issue as EventIssue,
  IssuesEvent,
  Repository as EventRepository,
  Organization as EventOrganization,
} from "@octokit/webhooks-definitions/schema";
import {
  EmitterWebhookEvent,
  HandlerFunction,
} from "@octokit/webhooks/dist-types/types";
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
  GitHubLabelIssueConnection,
  GetGitHubLabelIssueConnectionQuery,
  CreateGitHubLabelIssueConnectionMutation,
  CreateGitHubLabelIssueConnectionInput,
} from "../../../../amplify/API";
import { User } from "./User";
import { Label } from "./Label";
import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });

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
  protected _organization?: EventOrganization;
  protected _repository?: EventRepository;
  protected _event?: IssuesEvent;
  protected _didExist: boolean = true;
  protected issue?: GitHubIssue;

  constructor() {}

  get labels() {
    console.log(this.issue);
    return this.issue?.labels?.items ?? [];
  }

  get id() {
    return this.issue.id;
  }

  get assignees() {
    return this.issue.assignees;
  }

  get organization() {
    return this._organization;
  }

  get repository() {
    return this._repository;
  }

  async close() {}

  async reopen() {}

  async refresh() {
    this.issue = await getGitHubIssueFromWebhookEvent(this._event.issue);
  }

  async assign(obj: User) {}

  async unassign(obj: User) {}

  async label(l: Label) {
    await l.connect(this);
  }

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

  protected async backfillExistingIssue() {
    const { assignees, labels } = this._event.issue;
    for (const assignee of assignees) {
      const user = await User.fromEvent(assignee);
      this.assign(user);
    }
    for (const l of labels) {
      const label = await Label.fromIssue(this, l);
      this.label(label);
    }
  }

  protected async init() {
    const { action } = this._event;
    if (action !== "opened" && this._didExist === false) {
      await this.backfillExistingIssue();
    }
    return this;
  }

  protected asPersisted(b: boolean = true) {
    this._didExist = b;
    return this;
  }

  protected withRecord(r: GitHubIssue) {
    this.issue = r;
    return this;
  }

  protected withRepository(r: EventRepository) {
    this._repository = r;
    return this;
  }

  protected withOrganization(o: EventOrganization) {
    this._organization = o;
    return this;
  }

  protected withEvent(e: IssuesEvent) {
    this._event = e;
    return this;
  }

  protected async update(i: Omit<UpdateGitHubIssueInput, "id">) {
    const input: UpdateGitHubIssueInput = {
      id: this.issue.id,
      ...i,
    };
    this.issue = await updateGitHubIssue(input);
  }

  static async fromEvent(event: IssuesEvent): Promise<Issue> {
    // const gh = await octokit.request(`GET ${event.issue.url}`);

    try {
      let persisted = await getGitHubIssueFromWebhookEvent(event.issue);
      const didExist = persisted !== null;

      if (!didExist) {
        persisted = await createGitHubIssueFromWebhookEvent(event.issue);
      }

      return new Issue()
        .withEvent(event)
        .withRepository(event.repository)
        .withOrganization(event.organization)
        .withRecord(persisted)
        .asPersisted(didExist)
        .init();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
