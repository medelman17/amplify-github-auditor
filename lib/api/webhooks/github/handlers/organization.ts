import { HandlerFunction } from "@octokit/webhooks/dist-types/types";
import * as Models from "../models";

export const organizationEventHandler: HandlerFunction<
  "organization",
  unknown
> = async ({ payload }) => {
  const sender = await Models.User.fromEvent(payload.sender);
};
