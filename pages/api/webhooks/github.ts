import type { NextApiRequest, NextApiResponse } from "next";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
import Cors from "cors";
import { runMiddleware } from "../../../lib/api";
import { webhookMiddleware } from "../../../lib/api/webhooks/github";
import { createTransaction } from "../../../lib/api/webhooks/github/context";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: [new Sentry.Integrations.Http({ tracing: true })],
  tracesSampleRate: 1.0,
});

const cors = Cors();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const tx = createTransaction("github-webhook");
  req.on("close", () => {
    tx.finish();
  });

  await runMiddleware(req, res, Sentry.Handlers.requestHandler());
  await runMiddleware(req, res, webhookMiddleware);
  await runMiddleware(req, res, Sentry.Handlers.errorHandler());
  // await runMiddleware(req, res, cors);
};
