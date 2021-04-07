import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import { runMiddleware } from "@/api/utils";
import { webhookMiddleware } from "@/api/webhooks/github";

const cors = Cors();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors);
  await runMiddleware(req, res, webhookMiddleware);
};

export default handler;
