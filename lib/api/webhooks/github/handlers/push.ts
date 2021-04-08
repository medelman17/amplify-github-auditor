import { HandlerFunction } from "@octokit/webhooks/dist-types/types";
import * as Models from "../models";

export const pushEventHandler: HandlerFunction<"push", unknown> = async ({
  payload,
}) => {
  const sender = await Models.User.fromEvent(payload.sender);
};
