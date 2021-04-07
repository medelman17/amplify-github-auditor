import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

import { runMiddleware } from "../../lib/api/utils";
import { webhookMiddleware } from "../../lib/api/webhooks/github";

const cors = Cors();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors);

  await runMiddleware(req, res, webhookMiddleware);
  res.status(200).json({ name: "John Doe", GH: process.env.GITHUB_SECRET });
};
