import { HandlerFunction } from "@octokit/webhooks/dist-types/types";
import * as Models from "../models";

export const issueCommentEventHandler: HandlerFunction<
  "issue_comment",
  unknown
> = ({ payload }) => {
  const sender = new Models.User(payload.sender);
};
