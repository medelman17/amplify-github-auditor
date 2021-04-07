import { HandlerFunction } from "@octokit/webhooks/dist-types/types";
import * as Models from "../models";

export const labelEventHandler: HandlerFunction<"label", unknown> = ({
  payload,
}) => {
  const sender = new Models.User(payload.sender);
};
