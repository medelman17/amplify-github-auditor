import type { NextApiRequest, NextApiResponse } from "next";

import { runMiddleware } from "@/api/utils";
import { webhookMiddleware } from "@/api/webhooks/github";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, webhookMiddleware);
};

export default handler;
