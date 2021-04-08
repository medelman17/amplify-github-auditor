import { HandlerFunction } from "@octokit/webhooks/dist-types/types";
import * as Models from "../models";

export const repositoryEventHandler: HandlerFunction<
  "repository",
  unknown
> = async ({ payload }) => {
  const sender = await Models.User.fromEvent(payload.sender);
};
