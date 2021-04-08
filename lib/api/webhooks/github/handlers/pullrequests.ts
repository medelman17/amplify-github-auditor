import { HandlerFunction } from "@octokit/webhooks/dist-types/types";
import * as Models from "../models";

export const prEventHandler: HandlerFunction<"pull_request", unknown> = async ({
  payload,
}) => {
  const sender = await Models.User.fromEvent(payload.sender);
  const repository = await Models.Repository.fromEvent(payload.repository);
  const author = await Models.User.fromEvent(payload.pull_request.user);

  for (const assignee of payload.pull_request.assignees) {
    const user = await Models.User.fromEvent(assignee);
  }
};
