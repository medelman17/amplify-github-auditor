import { Issue } from "./Issue";
import {
  Repository as EventRepository,
  Organization as EventOrganization,
  Label as WebhookLabel,
  LabelEvent,
} from "@octokit/webhooks-definitions/schema";
import {
  API,
  graphqlOperation,
  queries,
  mutations,
  GraphQLResult,
} from "../context";
import {
  GitHubLabel,
  UpdateGitHubLabelInput,
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
  GetGitHubLabelQuery,
  CreateGitHubLabelMutation,
  UpdateGitHubLabelMutation,
  CreateGitHubLabelInput,
  CreateGitHubLabelIssueConnectionInput,
  CreateGitHubLabelIssueConnectionMutation,
  UpdateGitHubLabelIssueConnectionInput,
  UpdateGitHubLabelIssueConnectionMutation,
} from "../../../../amplify/API";
import { init } from "@sentry/node";

async function getGitHubLabel(vars: GetGitHubIssueQueryVariables) {
  try {
    const result = (await API.graphql(
      graphqlOperation(queries.getGitHubLabel, vars)
    )) as GraphQLResult<GetGitHubLabelQuery>;
    return result.data.getGitHubLabel;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function createGitHubLabel(input: CreateGitHubLabelInput) {
  try {
    const result = (await API.graphql(
      graphqlOperation(mutations.createGitHubLabel, { input })
    )) as GraphQLResult<CreateGitHubLabelMutation>;
    return result.data.createGitHubLabel;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function updateGitHubLabel(input: UpdateGitHubLabelInput) {
  try {
    const result = (await API.graphql(
      graphqlOperation(mutations.updateGitHubLabel, { input })
    )) as GraphQLResult<UpdateGitHubLabelMutation>;
    return result.data.updateGitHubLabel;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function createIssueLabelConnection(
  input: CreateGitHubLabelIssueConnectionInput
) {
  try {
    const result = (await API.graphql(
      graphqlOperation(mutations.createGitHubLabelIssueConnection, { input })
    )) as GraphQLResult<CreateGitHubLabelIssueConnectionMutation>;
    return result.data.createGitHubLabelIssueConnection;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function updateIssueLabelConnection(
  input: UpdateGitHubLabelIssueConnectionInput
) {
  try {
    const result = (await API.graphql(
      graphqlOperation(mutations.updateGitHubLabelIssueConnection, { input })
    )) as GraphQLResult<UpdateGitHubLabelIssueConnectionMutation>;
    return result.data.updateGitHubLabelIssueConnection;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export class Label {
  protected _organization?: EventOrganization;
  protected _repository?: EventRepository;
  protected _didExist: boolean = true;
  protected _label?: WebhookLabel;
  protected label?: GitHubLabel;

  get id() {
    return this.label.id;
  }

  protected async createIssueConnection() {
    try {
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async disconnect(item: Issue) {
    if (item instanceof Issue) {
      const connections = this.label.issues.items.filter((i) => {
        return i.issueId === item.id;
      });
      for (const conn of connections) {
        const result = await updateIssueLabelConnection({
          id: conn.id,
          dateTo: new Date(Date.now()).toISOString(),
        });
      }
      await item.refresh();
    }
  }

  async connect(item: Issue) {
    if (item instanceof Issue) {
      const result = await createIssueLabelConnection({
        issueId: item.id,
        labelId: this.label.id,
        dateFrom: new Date(Date.now()).toISOString(),
      });
      await item.refresh();
    }
  }

  protected async init() {
    return this;
  }

  protected asPersisted(b: boolean = true) {
    this._didExist = b;
    return this;
  }

  protected withRecord(r: GitHubLabel) {
    this.label = r;
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

  protected static getCreateLabelInputFromWebhookLabel(
    d: WebhookLabel
  ): CreateGitHubLabelInput {
    return {
      id: d.id.toString(),
      apiUrl: d.url,
      name: d.name,
      color: d.color,
      default: d.default,
      nodeId: d.node_id,
      description: d.description,
    };
  }

  static async fromIssue(parent: Issue, data: WebhookLabel): Promise<Label> {
    try {
      let persisted = await getGitHubLabel({ id: data.id.toString() });
      const didExist = persisted !== null;
      if (!didExist) {
        persisted = await createGitHubLabel(
          Label.getCreateLabelInputFromWebhookLabel(data)
        );
      }
      return new Label()
        .withOrganization(parent.organization)
        .withRepository(parent.repository)
        .withRecord(persisted)
        .asPersisted(didExist)
        .init();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async fromEvent(event: LabelEvent): Promise<Label> {
    try {
      let persisted = await getGitHubLabel({ id: event.label.id.toString() });
      const didExist = persisted !== null;
      if (!didExist) {
        persisted = await createGitHubLabel(
          Label.getCreateLabelInputFromWebhookLabel(event.label)
        );
      }
      return new Label()
        .withOrganization(event.organization)
        .withRepository(event.repository)
        .withRecord(persisted)
        .asPersisted(didExist)
        .init();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
