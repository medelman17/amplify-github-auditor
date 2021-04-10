import {
  HandlerFunction,
  EmitterWebhookEvent,
} from "@octokit/webhooks/dist-types/types";
import * as Sentry from "@sentry/node";
import * as Guards from "../guards";
import * as Models from "../models";
import * as WebhookSchema from "@octokit/webhooks-definitions/schema";

export const issueCommentEventHandler: HandlerFunction<
  "issue_comment",
  unknown
> = async (props) => {
  configureTracing(props);

  const { payload } = props;

  if (Guards.isIssueCommentCreatedEvent(payload)) {
    return await handleIssueCommentCreated(payload);
  } else if (Guards.isIssueCommentDeletedEvent(payload)) {
    return await handleIssueCommentDeleted(payload);
  } else if (Guards.isIssueCommentEditedEvent(payload)) {
    return await handleIssueCommentEdited(payload);
  } else {
    throw new Error(`Handler for ${props.name} action not implemented`);
  }
};

async function handleIssueCommentCreated(
  event: WebhookSchema.IssueCommentCreatedEvent
) {
  const issue = await Models.Issue.fromComment(event);
}

async function handleIssueCommentEdited(
  event: WebhookSchema.IssueCommentEditedEvent
) {
  const issue = await Models.Issue.fromComment(event);
}

async function handleIssueCommentDeleted(
  event: WebhookSchema.IssueCommentDeletedEvent
) {
  const issue = await Models.Issue.fromComment(event);
}

function configureTracing(props: EmitterWebhookEvent<"issue_comment">) {
  Sentry.configureScope((scope) => {
    scope.setTransactionName(`${props.name}-${props.payload.action}`);
  });
}
