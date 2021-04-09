import { HandlerFunction } from "@octokit/webhooks/dist-types/types";
import * as Models from "../models";

export const labelEventHandler: HandlerFunction<"label", unknown> = async ({
  payload,
}) => {
  // const sender = await Models.User.fromEvent(payload.sender);
};
