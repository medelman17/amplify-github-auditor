import {
  IssuesAssignedEvent,
  IssuesUnassignedEvent,
  IssuesOpenedEvent,
  IssuesClosedEvent,
  IssuesEditedEvent,
  IssuesLabeledEvent,
  IssuesUnlabeledEvent,
  IssuesReopenedEvent,
  IssuesEvent,
} from "@octokit/webhooks-definitions/schema";

export function isIssuesReopenedEvent(
  e: IssuesEvent
): e is IssuesReopenedEvent {
  return (e as IssuesReopenedEvent).action === "reopened";
}

export function isIssuesUnlabeledEvent(
  e: IssuesEvent
): e is IssuesUnlabeledEvent {
  return (e as IssuesUnlabeledEvent).action === "unlabeled";
}

export function isIssuesLabeledEvent(e: IssuesEvent): e is IssuesLabeledEvent {
  return (e as IssuesLabeledEvent).action === "labeled";
}

export function isIssuesEditedEvent(e: IssuesEvent): e is IssuesEditedEvent {
  return (e as IssuesEditedEvent).action === "edited";
}

export function isIssuesClosedEvent(e: IssuesEvent): e is IssuesClosedEvent {
  return (e as IssuesClosedEvent).action === "closed";
}

export function isIssuesOpenedEvent(e: IssuesEvent): e is IssuesOpenedEvent {
  return (e as IssuesOpenedEvent).action === "opened";
}

export function isIssuesAssignedEvent(
  e: IssuesEvent
): e is IssuesAssignedEvent {
  return (e as IssuesAssignedEvent).action === "assigned";
}

export function isIssuesUnassignedEvent(
  e: IssuesEvent
): e is IssuesUnassignedEvent {
  return (e as IssuesUnassignedEvent).action === "unassigned";
}
