import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import { runMiddleware } from "../../../lib/api";
import { webhookMiddleware } from "../../../lib/api/webhooks/github";

const cors = Cors();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, webhookMiddleware);
  await runMiddleware(req, res, cors);
};
