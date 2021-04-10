import {
  IssueCommentEvent,
  IssueCommentCreatedEvent,
  IssueCommentDeletedEvent,
  IssueCommentEditedEvent,
} from "@octokit/webhooks-definitions/schema";

export function isIssueCommentCreatedEvent(
  e: IssueCommentEvent
): e is IssueCommentCreatedEvent {
  return (e as IssueCommentCreatedEvent).action === "created";
}

export function isIssueCommentEditedEvent(
  e: IssueCommentEvent
): e is IssueCommentEditedEvent {
  return (e as IssueCommentEditedEvent).action === "edited";
}

export function isIssueCommentDeletedEvent(
  e: IssueCommentEvent
): e is IssueCommentDeletedEvent {
  return (e as IssueCommentDeletedEvent).action === "deleted";
}
