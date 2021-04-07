import { HandlerFunction } from "@octokit/webhooks/dist-types/types";
import * as Models from "../models";

export const pushEventHandler: HandlerFunction<"push", unknown> = ({
  payload,
}) => {
  const sender = new Models.User(payload.sender);
};
