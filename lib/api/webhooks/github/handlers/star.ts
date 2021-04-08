import { HandlerFunction } from "@octokit/webhooks/dist-types/types";
import * as Models from "../models";

export const starEventHandler: HandlerFunction<"star", unknown> = async ({
  payload,
}) => {
  const sender = await new Models.User(payload.sender).init();
};
