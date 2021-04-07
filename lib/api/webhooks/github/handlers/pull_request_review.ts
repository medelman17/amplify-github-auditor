import { HandlerFunction } from "@octokit/webhooks/dist-types/types";
import * as Models from "../models";

export const prReviewRequestEventHandler: HandlerFunction<
  "pull_request_review",
  unknown
> = ({ payload }) => {
  const sender = new Models.User(payload.sender);
};