import * as WebhookSchema from "@octokit/webhooks-definitions/schema";
import * as Sentry from "@sentry/node";
import * as Guards from "../guards";
import * as Models from "../models";
import {
  EmitterWebhookEvent,
  HandlerFunction,
} from "@octokit/webhooks/dist-types/types";

export const issueEventHandler: HandlerFunction<"issues", unknown> = async (
  props
) => {
  configureTracing(props);

  const { payload } = props;

  if (Guards.isIssuesOpenedEvent(payload)) {
    await handleIssueOpen(payload);
  } else if (Guards.isIssuesClosedEvent(payload)) {
    await handleIssueClosed(payload);
  } else if (Guards.isIssuesReopenedEvent(payload)) {
    await handleIssueReopened(payload);
  } else if (Guards.isIssuesEditedEvent(payload)) {
    await handleIssueEdited(payload);
  } else if (Guards.isIssuesLabeledEvent(payload)) {
    await handleIssueLabeled(payload);
  } else if (Guards.isIssuesUnlabeledEvent(payload)) {
    await handleIssueUnlabeled(payload);
  } else if (Guards.isIssuesAssignedEvent(payload)) {
    await handleIssueAssigned(payload);
  } else if (Guards.isIssuesUnassignedEvent(payload)) {
    await handleIssueUnassigned(payload);
  } else {
    throw new Error(
      `Handler for issue action ${payload.action} not implemented`
    );
  }
};

async function handleIssueOpen(event: WebhookSchema.IssuesOpenedEvent) {
  await Models.Issue.fromEvent(event);
}

async function handleIssueClosed(event: WebhookSchema.IssuesClosedEvent) {
  const issue = await Models.Issue.fromEvent(event);
  await issue.close();
}

async function handleIssueReopened(event: WebhookSchema.IssuesReopenedEvent) {
  const issue = await Models.Issue.fromEvent(event);
  await issue.reopen();
}

async function handleIssueEdited(event: WebhookSchema.IssuesEditedEvent) {
  const issue = await Models.Issue.fromEvent(event);
}

async function handleIssueLabeled(event: WebhookSchema.IssuesLabeledEvent) {
  const issue = await Models.Issue.fromEvent(event);
  const label = await Models.Label.fromIssue(issue, event.label);
  await label.connect(issue);
}

async function handleIssueUnlabeled(event: WebhookSchema.IssuesUnlabeledEvent) {
  const issue = await Models.Issue.fromEvent(event);
  const label = await Models.Label.fromIssue(issue, event.label);
  await label.disconnect(issue);
}

async function handleIssueAssigned(event: WebhookSchema.IssuesAssignedEvent) {
  const issue = await Models.Issue.fromEvent(event);
  const user = await Models.User.fromEvent(event.assignee);
  await issue.assign(user);
}

async function handleIssueUnassigned(
  event: WebhookSchema.IssuesUnassignedEvent
) {
  const issue = await Models.Issue.fromEvent(event);
  const user = await Models.User.fromEvent(event.assignee);
  await issue.unassign(user);
}

function configureTracing(props: EmitterWebhookEvent<"issues">) {
  Sentry.configureScope((scope) => {
    scope.setTransactionName(`${props.name}-${props.payload.action}`);
  });
}
