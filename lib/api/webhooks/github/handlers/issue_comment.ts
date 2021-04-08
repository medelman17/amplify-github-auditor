import { HandlerFunction } from "@octokit/webhooks/dist-types/types";
import * as Models from "../models";

export const issueCommentEventHandler: HandlerFunction<
  "issue_comment",
  unknown
> = async ({ payload }) => {
  const sender = await new Models.User(payload.sender);
  console.log("sender", sender);
};
