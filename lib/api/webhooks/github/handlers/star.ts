import { HandlerFunction } from "@octokit/webhooks/dist-types/types";
import * as Models from "../models";

export const starEventHandler: HandlerFunction<"star", unknown> = ({
  payload,
}) => {
  const sender = new Models.User(payload.sender);
};
