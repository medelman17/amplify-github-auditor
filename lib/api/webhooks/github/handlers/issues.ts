import { HandlerFunction } from "@octokit/webhooks/dist-types/types";
import * as Models from "../models";

export const issueEventHandler: HandlerFunction<"issues", unknown> = ({
  payload,
}) => {
  const sender = new Models.User(payload.sender);
};
