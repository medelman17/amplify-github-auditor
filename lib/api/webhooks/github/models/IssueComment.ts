import { IssueCommentEvent } from "@octokit/webhooks-definitions/schema";
import { Issue } from "./Issue";
import { User } from "./User";

type IssComment = IssueCommentEvent["comment"];

export class IssueComment {
  static async fromApiResponse(res: IssComment): Promise<IssueComment> {
    console.log("comment", res);
    const author = await User.fromEvent(res.user);
    return new IssueComment();
  }
  static async fromEvent(event: IssueCommentEvent): Promise<IssueComment> {
    return new IssueComment();
  }

  static async fromIssue(
    parent: Issue,
    data: IssueCommentEvent["comment"]
  ): Promise<IssueComment> {
    return new IssueComment();
  }

  static async fromPullRequest(): Promise<IssueComment> {
    return new IssueComment();
  }
}
