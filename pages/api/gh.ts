import type { NextApiRequest, NextApiResponse } from "next";

// import { runMiddleware } from "../../lib/api/utils";
// import { webhookMiddleware } from "../../lib/api/webhooks/github";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //   await runMiddleware(req, res, webhookMiddleware);
  res.status(200).json({ name: "John Doe" });
};
