import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import { runMiddleware } from "@/api/utils";
import { webhookMiddleware } from "@/api/webhooks/github";

const cors = Cors();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, webhookMiddleware);
  await runMiddleware(req, res, cors);
  res.json({ msg: "OK" });
};
