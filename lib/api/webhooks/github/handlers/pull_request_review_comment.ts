import { HandlerFunction } from "@octokit/webhooks/dist-types/types";
import * as Models from "../models";

export const prRevReqCommentEventHandler: HandlerFunction<
  "pull_request_review_comment",
  unknown
> = async ({ payload }) => {
  // const sender = await Models.User.fromEvent(payload.sender);
};
