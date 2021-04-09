import { Webhooks, createNodeMiddleware } from "@octokit/webhooks";
import * as Handlers from "./handlers";

const GITHUB_SECRET = "2jWWv53mI1FFjNwBJQN9avcZf6Vzneo1TsWNtOA1";

const webhook = new Webhooks({ secret: GITHUB_SECRET });

webhook.on("issues", Handlers.issueEventHandler);
webhook.on("pull_request", Handlers.prEventHandler);
webhook.on("repository", Handlers.repositoryEventHandler);
webhook.on("commit_comment", Handlers.commitCommentEventHandler);
webhook.on("issue_comment", Handlers.issueCommentEventHandler);
webhook.on("label", Handlers.labelEventHandler);
webhook.on("member", Handlers.memberEventHandler);
webhook.on("organization", Handlers.organizationEventHandler);
webhook.on("pull_request_review", Handlers.prReviewRequestEventHandler);
webhook.on("pull_request_review_comment", Handlers.prRevReqCommentEventHandler);
webhook.on("push", Handlers.pushEventHandler);
webhook.on("star", Handlers.starEventHandler);
webhook.on("team", Handlers.teamEventHandler);

export const webhookMiddleware = createNodeMiddleware(webhook, {});
