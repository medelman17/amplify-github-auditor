import { HandlerFunction } from "@octokit/webhooks/dist-types/types";
import * as Models from "../models";

export const memberEventHandler: HandlerFunction<"member", unknown> = async ({
  payload,
}) => {
  const sender = await new Models.User(payload.sender).init();
};
