import { HandlerFunction } from "@octokit/webhooks/dist-types/types";
import * as Models from "../models";

export const issueEventHandler: HandlerFunction<"issues", unknown> = async ({
  payload,
}) => {
  const sender = await Models.User.fromEvent(payload.sender);
  const issue = await Models.Issue.fromEvent(payload.issue);
  const author = await Models.User.fromEvent(payload.issue.user);
  const repository = await Models.Repository.fromEvent(payload.repository);
  await issue.attach(repository);

  for (const assignee of payload.issue.assignees) {
    const user = await Models.User.fromEvent(assignee);
    await issue.assign(user);
  }
};
