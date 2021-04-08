/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGitHubIssueInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  nodeId: string,
  apiUrl: string,
  htmlUrl: string,
  title: string,
  number: number,
  locked: boolean,
  state: GitHubIssueState,
  body: string,
  closedAt?: string | null,
  authorId: string,
  repositoryId: string,
};

export enum GitHubIssueState {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}


export type ModelGitHubIssueConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  nodeId?: ModelStringInput | null,
  apiUrl?: ModelStringInput | null,
  htmlUrl?: ModelStringInput | null,
  title?: ModelStringInput | null,
  number?: ModelIntInput | null,
  locked?: ModelBooleanInput | null,
  state?: ModelGitHubIssueStateInput | null,
  body?: ModelStringInput | null,
  closedAt?: ModelStringInput | null,
  authorId?: ModelIDInput | null,
  repositoryId?: ModelIDInput | null,
  and?: Array< ModelGitHubIssueConditionInput | null > | null,
  or?: Array< ModelGitHubIssueConditionInput | null > | null,
  not?: ModelGitHubIssueConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelGitHubIssueStateInput = {
  eq?: GitHubIssueState | null,
  ne?: GitHubIssueState | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type GitHubIssue = {
  __typename: "GitHubIssue",
  id?: string,
  createdAt?: string,
  updatedAt?: string,
  nodeId?: string,
  apiUrl?: string,
  htmlUrl?: string,
  title?: string,
  number?: number,
  locked?: boolean,
  state?: GitHubIssueState,
  body?: string,
  closedAt?: string | null,
  authorId?: string,
  author?: GitHubUser,
  repositoryId?: string,
  repository?: GitHubRepository,
  assignees?: ModelIssueAsigneeConnection,
};

export type GitHubUser = {
  __typename: "GitHubUser",
  id?: string,
  createdAt?: string,
  updatedAt?: string,
  login?: string,
  nodeId?: string,
  apiUrl?: string,
  htmlUrl?: string,
  avatar?: string | null,
  name?: string | null,
  company?: string | null,
  email?: string | null,
  issuesAuthored?: ModelGitHubIssueConnection,
  issuesAssigned?: ModelIssueAsigneeConnection,
  pullRequestsAuthored?: ModelGitHubPullRequestConnection,
  pullRequestsAssigned?: ModelPullRequestAsigneeConnection,
  reviewRequestsAuthored?: ModelPullRequestReviewRequestConnection,
  reviewRequestsAssigned?: ModelPullRequestReviewRequestConnection,
};

export type ModelGitHubIssueConnection = {
  __typename: "ModelGitHubIssueConnection",
  items?:  Array<GitHubIssue | null > | null,
  nextToken?: string | null,
};

export type ModelIssueAsigneeConnection = {
  __typename: "ModelIssueAsigneeConnection",
  items?:  Array<IssueAsignee | null > | null,
  nextToken?: string | null,
};

export type IssueAsignee = {
  __typename: "IssueAsignee",
  id?: string,
  createdAt?: string,
  updatedAt?: string,
  dateFrom?: string,
  dateTo?: string | null,
  issueId?: string,
  userId?: string,
  pullRequest?: GitHubIssue,
  user?: GitHubUser,
};

export type ModelGitHubPullRequestConnection = {
  __typename: "ModelGitHubPullRequestConnection",
  items?:  Array<GitHubPullRequest | null > | null,
  nextToken?: string | null,
};

export type GitHubPullRequest = {
  __typename: "GitHubPullRequest",
  id?: string,
  createdAt?: string,
  updatedAt?: string,
  closedAt?: string | null,
  mergedAt?: string | null,
  apiUrl?: string,
  htmlUrl?: string,
  title?: string,
  number?: number,
  locked?: boolean,
  body?: string,
  authorId?: string,
  author?: GitHubUser,
  repositoryId?: string,
  repository?: GitHubRepository,
  assignees?: ModelPullRequestAsigneeConnection,
  reviews?: ModelPullRequestReviewConnection,
  reviewsRequested?: ModelPullRequestReviewRequestConnection,
  reviewComments?: ModelPullRequestReviewCommentConnection,
};

export type GitHubRepository = {
  __typename: "GitHubRepository",
  id?: string,
  createdAt?: string,
  updatedAt?: string,
  nodeId?: string,
  name?: string,
  fullName?: string,
  description?: string | null,
  apiUrl?: string,
  htmlUrl?: string,
  gitUrl?: string,
  sshUrl?: string,
  issues?: ModelGitHubIssueConnection,
  pullRequests?: ModelGitHubPullRequestConnection,
  reviewRequests?: ModelPullRequestReviewRequestConnection,
};

export type ModelPullRequestReviewRequestConnection = {
  __typename: "ModelPullRequestReviewRequestConnection",
  items?:  Array<PullRequestReviewRequest | null > | null,
  nextToken?: string | null,
};

export type PullRequestReviewRequest = {
  __typename: "PullRequestReviewRequest",
  id?: string,
  createdAt?: string,
  updatedAt?: string,
  dateFrom?: string,
  dateTo?: string | null,
  state?: PullRequestReviewRequestState,
  repositoryId?: string,
  repository?: GitHubRepository,
  pullRequestId?: string,
  pullRequest?: GitHubPullRequest,
  reviewerId?: string,
  reviewer?: GitHubUser,
  requesterId?: string,
  requester?: GitHubUser,
  reviewId?: string,
  review?: PullRequestReview,
};

export enum PullRequestReviewRequestState {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETE = "COMPLETE",
}


export type PullRequestReview = {
  __typename: "PullRequestReview",
  id?: string,
  createdAt?: string,
  updatedAt?: string,
  body?: string | null,
  commitId?: string | null,
  submittedAt?: string | null,
  state?: PullRequestReviewState,
  requestId?: string,
  request?: PullRequestReviewRequest,
  comments?: ModelPullRequestReviewCommentConnection,
};

export enum PullRequestReviewState {
  DISMISSED = "DISMISSED",
  SUBMITTED = "SUBMITTED",
  COMMENTED = "COMMENTED",
}


export type ModelPullRequestReviewCommentConnection = {
  __typename: "ModelPullRequestReviewCommentConnection",
  items?:  Array<PullRequestReviewComment | null > | null,
  nextToken?: string | null,
};

export type PullRequestReviewComment = {
  __typename: "PullRequestReviewComment",
  id?: string,
  createdAt?: string,
  updatedAt?: string,
  nodeId?: string,
  path?: string,
  diffHunk?: string | null,
  body?: string,
  position?: number,
  originalPosition?: number,
  apiUrl?: string,
  htmlUrl?: string,
  commitId?: string,
  originalCommitId?: string,
  authorId?: string,
  author?: GitHubUser,
  pullRequestReviewId?: string,
  pullRequestReview?: PullRequestReview,
  pullRequestId?: string,
  pullRequest?: GitHubPullRequest,
};

export type ModelPullRequestAsigneeConnection = {
  __typename: "ModelPullRequestAsigneeConnection",
  items?:  Array<PullRequestAsignee | null > | null,
  nextToken?: string | null,
};

export type PullRequestAsignee = {
  __typename: "PullRequestAsignee",
  id?: string,
  createdAt?: string,
  updatedAt?: string,
  dateFrom?: string,
  dateTo?: string | null,
  pullRequestId?: string,
  userId?: string,
  pullRequest?: GitHubPullRequest,
  user?: GitHubUser,
};

export type ModelPullRequestReviewConnection = {
  __typename: "ModelPullRequestReviewConnection",
  items?:  Array<PullRequestReview | null > | null,
  nextToken?: string | null,
};

export type UpdateGitHubIssueInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  nodeId?: string | null,
  apiUrl?: string | null,
  htmlUrl?: string | null,
  title?: string | null,
  number?: number | null,
  locked?: boolean | null,
  state?: GitHubIssueState | null,
  body?: string | null,
  closedAt?: string | null,
  authorId?: string | null,
  repositoryId?: string | null,
};

export type DeleteGitHubIssueInput = {
  id?: string | null,
};

export type CreateIssueAsigneeInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  dateFrom: string,
  dateTo?: string | null,
  issueId: string,
  userId: string,
};

export type ModelIssueAsigneeConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  dateFrom?: ModelStringInput | null,
  dateTo?: ModelStringInput | null,
  issueId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelIssueAsigneeConditionInput | null > | null,
  or?: Array< ModelIssueAsigneeConditionInput | null > | null,
  not?: ModelIssueAsigneeConditionInput | null,
};

export type UpdateIssueAsigneeInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  dateFrom?: string | null,
  dateTo?: string | null,
  issueId?: string | null,
  userId?: string | null,
};

export type DeleteIssueAsigneeInput = {
  id?: string | null,
};

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type Todo = {
  __typename: "Todo",
  id?: string,
  name?: string,
  description?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id?: string | null,
};

export type CreateGitHubOrganizationInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  login: string,
  nodeId: string,
  apiUrl: string,
  avatar?: string | null,
  email?: string | null,
};

export type ModelGitHubOrganizationConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  nodeId?: ModelStringInput | null,
  apiUrl?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelGitHubOrganizationConditionInput | null > | null,
  or?: Array< ModelGitHubOrganizationConditionInput | null > | null,
  not?: ModelGitHubOrganizationConditionInput | null,
};

export type GitHubOrganization = {
  __typename: "GitHubOrganization",
  id?: string,
  createdAt?: string,
  updatedAt?: string,
  login?: string,
  nodeId?: string,
  apiUrl?: string,
  avatar?: string | null,
  email?: string | null,
};

export type UpdateGitHubOrganizationInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  login?: string | null,
  nodeId?: string | null,
  apiUrl?: string | null,
  avatar?: string | null,
  email?: string | null,
};

export type DeleteGitHubOrganizationInput = {
  id?: string | null,
};

export type CreateGitHubPullRequestInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  closedAt?: string | null,
  mergedAt?: string | null,
  apiUrl: string,
  htmlUrl: string,
  title: string,
  number: number,
  locked: boolean,
  body: string,
  authorId: string,
  repositoryId: string,
};

export type ModelGitHubPullRequestConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  closedAt?: ModelStringInput | null,
  mergedAt?: ModelStringInput | null,
  apiUrl?: ModelStringInput | null,
  htmlUrl?: ModelStringInput | null,
  title?: ModelStringInput | null,
  number?: ModelIntInput | null,
  locked?: ModelBooleanInput | null,
  body?: ModelStringInput | null,
  authorId?: ModelIDInput | null,
  repositoryId?: ModelIDInput | null,
  and?: Array< ModelGitHubPullRequestConditionInput | null > | null,
  or?: Array< ModelGitHubPullRequestConditionInput | null > | null,
  not?: ModelGitHubPullRequestConditionInput | null,
};

export type UpdateGitHubPullRequestInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  closedAt?: string | null,
  mergedAt?: string | null,
  apiUrl?: string | null,
  htmlUrl?: string | null,
  title?: string | null,
  number?: number | null,
  locked?: boolean | null,
  body?: string | null,
  authorId?: string | null,
  repositoryId?: string | null,
};

export type DeleteGitHubPullRequestInput = {
  id?: string | null,
};

export type CreatePullRequestAsigneeInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  dateFrom: string,
  dateTo?: string | null,
  pullRequestId: string,
  userId: string,
};

export type ModelPullRequestAsigneeConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  dateFrom?: ModelStringInput | null,
  dateTo?: ModelStringInput | null,
  pullRequestId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelPullRequestAsigneeConditionInput | null > | null,
  or?: Array< ModelPullRequestAsigneeConditionInput | null > | null,
  not?: ModelPullRequestAsigneeConditionInput | null,
};

export type UpdatePullRequestAsigneeInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  dateFrom?: string | null,
  dateTo?: string | null,
  pullRequestId?: string | null,
  userId?: string | null,
};

export type DeletePullRequestAsigneeInput = {
  id?: string | null,
};

export type CreatePullRequestReviewInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  body?: string | null,
  commitId?: string | null,
  submittedAt?: string | null,
  state: PullRequestReviewState,
  requestId: string,
};

export type ModelPullRequestReviewConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  body?: ModelStringInput | null,
  commitId?: ModelStringInput | null,
  submittedAt?: ModelStringInput | null,
  state?: ModelPullRequestReviewStateInput | null,
  requestId?: ModelIDInput | null,
  and?: Array< ModelPullRequestReviewConditionInput | null > | null,
  or?: Array< ModelPullRequestReviewConditionInput | null > | null,
  not?: ModelPullRequestReviewConditionInput | null,
};

export type ModelPullRequestReviewStateInput = {
  eq?: PullRequestReviewState | null,
  ne?: PullRequestReviewState | null,
};

export type UpdatePullRequestReviewInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  body?: string | null,
  commitId?: string | null,
  submittedAt?: string | null,
  state?: PullRequestReviewState | null,
  requestId?: string | null,
};

export type DeletePullRequestReviewInput = {
  id?: string | null,
};

export type CreatePullRequestReviewCommentInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  nodeId: string,
  path: string,
  diffHunk?: string | null,
  body: string,
  position: number,
  originalPosition: number,
  apiUrl: string,
  htmlUrl: string,
  commitId: string,
  originalCommitId: string,
  authorId: string,
  pullRequestReviewId: string,
  pullRequestId: string,
};

export type ModelPullRequestReviewCommentConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  nodeId?: ModelStringInput | null,
  path?: ModelStringInput | null,
  diffHunk?: ModelStringInput | null,
  body?: ModelStringInput | null,
  position?: ModelIntInput | null,
  originalPosition?: ModelIntInput | null,
  apiUrl?: ModelStringInput | null,
  htmlUrl?: ModelStringInput | null,
  commitId?: ModelStringInput | null,
  originalCommitId?: ModelStringInput | null,
  authorId?: ModelIDInput | null,
  pullRequestReviewId?: ModelIDInput | null,
  pullRequestId?: ModelIDInput | null,
  and?: Array< ModelPullRequestReviewCommentConditionInput | null > | null,
  or?: Array< ModelPullRequestReviewCommentConditionInput | null > | null,
  not?: ModelPullRequestReviewCommentConditionInput | null,
};

export type UpdatePullRequestReviewCommentInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  nodeId?: string | null,
  path?: string | null,
  diffHunk?: string | null,
  body?: string | null,
  position?: number | null,
  originalPosition?: number | null,
  apiUrl?: string | null,
  htmlUrl?: string | null,
  commitId?: string | null,
  originalCommitId?: string | null,
  authorId?: string | null,
  pullRequestReviewId?: string | null,
  pullRequestId?: string | null,
};

export type DeletePullRequestReviewCommentInput = {
  id?: string | null,
};

export type CreateGitHubRepositoryInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  nodeId: string,
  name: string,
  fullName: string,
  description?: string | null,
  apiUrl: string,
  htmlUrl: string,
  gitUrl: string,
  sshUrl: string,
};

export type ModelGitHubRepositoryConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  nodeId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  apiUrl?: ModelStringInput | null,
  htmlUrl?: ModelStringInput | null,
  gitUrl?: ModelStringInput | null,
  sshUrl?: ModelStringInput | null,
  and?: Array< ModelGitHubRepositoryConditionInput | null > | null,
  or?: Array< ModelGitHubRepositoryConditionInput | null > | null,
  not?: ModelGitHubRepositoryConditionInput | null,
};

export type UpdateGitHubRepositoryInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  nodeId?: string | null,
  name?: string | null,
  fullName?: string | null,
  description?: string | null,
  apiUrl?: string | null,
  htmlUrl?: string | null,
  gitUrl?: string | null,
  sshUrl?: string | null,
};

export type DeleteGitHubRepositoryInput = {
  id?: string | null,
};

export type CreateGitHubUserInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  login: string,
  nodeId: string,
  apiUrl: string,
  htmlUrl: string,
  avatar?: string | null,
  name?: string | null,
  company?: string | null,
  email?: string | null,
};

export type ModelGitHubUserConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  nodeId?: ModelStringInput | null,
  apiUrl?: ModelStringInput | null,
  htmlUrl?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  name?: ModelStringInput | null,
  company?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelGitHubUserConditionInput | null > | null,
  or?: Array< ModelGitHubUserConditionInput | null > | null,
  not?: ModelGitHubUserConditionInput | null,
};

export type UpdateGitHubUserInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  login?: string | null,
  nodeId?: string | null,
  apiUrl?: string | null,
  htmlUrl?: string | null,
  avatar?: string | null,
  name?: string | null,
  company?: string | null,
  email?: string | null,
};

export type DeleteGitHubUserInput = {
  id?: string | null,
};

export type CreatePullRequestReviewRequestInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  dateFrom: string,
  dateTo?: string | null,
  state: PullRequestReviewRequestState,
  repositoryId: string,
  pullRequestId: string,
  reviewerId: string,
  requesterId: string,
  reviewId: string,
};

export type ModelPullRequestReviewRequestConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  dateFrom?: ModelStringInput | null,
  dateTo?: ModelStringInput | null,
  state?: ModelPullRequestReviewRequestStateInput | null,
  repositoryId?: ModelIDInput | null,
  pullRequestId?: ModelIDInput | null,
  reviewerId?: ModelIDInput | null,
  requesterId?: ModelIDInput | null,
  reviewId?: ModelIDInput | null,
  and?: Array< ModelPullRequestReviewRequestConditionInput | null > | null,
  or?: Array< ModelPullRequestReviewRequestConditionInput | null > | null,
  not?: ModelPullRequestReviewRequestConditionInput | null,
};

export type ModelPullRequestReviewRequestStateInput = {
  eq?: PullRequestReviewRequestState | null,
  ne?: PullRequestReviewRequestState | null,
};

export type UpdatePullRequestReviewRequestInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  dateFrom?: string | null,
  dateTo?: string | null,
  state?: PullRequestReviewRequestState | null,
  repositoryId?: string | null,
  pullRequestId?: string | null,
  reviewerId?: string | null,
  requesterId?: string | null,
  reviewId?: string | null,
};

export type DeletePullRequestReviewRequestInput = {
  id?: string | null,
};

export type ModelGitHubIssueFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  nodeId?: ModelStringInput | null,
  apiUrl?: ModelStringInput | null,
  htmlUrl?: ModelStringInput | null,
  title?: ModelStringInput | null,
  number?: ModelIntInput | null,
  locked?: ModelBooleanInput | null,
  state?: ModelGitHubIssueStateInput | null,
  body?: ModelStringInput | null,
  closedAt?: ModelStringInput | null,
  authorId?: ModelIDInput | null,
  repositoryId?: ModelIDInput | null,
  and?: Array< ModelGitHubIssueFilterInput | null > | null,
  or?: Array< ModelGitHubIssueFilterInput | null > | null,
  not?: ModelGitHubIssueFilterInput | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items?:  Array<Todo | null > | null,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelGitHubOrganizationFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  login?: ModelStringInput | null,
  nodeId?: ModelStringInput | null,
  apiUrl?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelGitHubOrganizationFilterInput | null > | null,
  or?: Array< ModelGitHubOrganizationFilterInput | null > | null,
  not?: ModelGitHubOrganizationFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelGitHubOrganizationConnection = {
  __typename: "ModelGitHubOrganizationConnection",
  items?:  Array<GitHubOrganization | null > | null,
  nextToken?: string | null,
};

export type ModelGitHubPullRequestFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  closedAt?: ModelStringInput | null,
  mergedAt?: ModelStringInput | null,
  apiUrl?: ModelStringInput | null,
  htmlUrl?: ModelStringInput | null,
  title?: ModelStringInput | null,
  number?: ModelIntInput | null,
  locked?: ModelBooleanInput | null,
  body?: ModelStringInput | null,
  authorId?: ModelIDInput | null,
  repositoryId?: ModelIDInput | null,
  and?: Array< ModelGitHubPullRequestFilterInput | null > | null,
  or?: Array< ModelGitHubPullRequestFilterInput | null > | null,
  not?: ModelGitHubPullRequestFilterInput | null,
};

export type ModelPullRequestReviewFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  body?: ModelStringInput | null,
  commitId?: ModelStringInput | null,
  submittedAt?: ModelStringInput | null,
  state?: ModelPullRequestReviewStateInput | null,
  requestId?: ModelIDInput | null,
  and?: Array< ModelPullRequestReviewFilterInput | null > | null,
  or?: Array< ModelPullRequestReviewFilterInput | null > | null,
  not?: ModelPullRequestReviewFilterInput | null,
};

export type ModelPullRequestReviewCommentFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  nodeId?: ModelStringInput | null,
  path?: ModelStringInput | null,
  diffHunk?: ModelStringInput | null,
  body?: ModelStringInput | null,
  position?: ModelIntInput | null,
  originalPosition?: ModelIntInput | null,
  apiUrl?: ModelStringInput | null,
  htmlUrl?: ModelStringInput | null,
  commitId?: ModelStringInput | null,
  originalCommitId?: ModelStringInput | null,
  authorId?: ModelIDInput | null,
  pullRequestReviewId?: ModelIDInput | null,
  pullRequestId?: ModelIDInput | null,
  and?: Array< ModelPullRequestReviewCommentFilterInput | null > | null,
  or?: Array< ModelPullRequestReviewCommentFilterInput | null > | null,
  not?: ModelPullRequestReviewCommentFilterInput | null,
};

export type ModelGitHubRepositoryFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  nodeId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  apiUrl?: ModelStringInput | null,
  htmlUrl?: ModelStringInput | null,
  gitUrl?: ModelStringInput | null,
  sshUrl?: ModelStringInput | null,
  and?: Array< ModelGitHubRepositoryFilterInput | null > | null,
  or?: Array< ModelGitHubRepositoryFilterInput | null > | null,
  not?: ModelGitHubRepositoryFilterInput | null,
};

export type ModelGitHubRepositoryConnection = {
  __typename: "ModelGitHubRepositoryConnection",
  items?:  Array<GitHubRepository | null > | null,
  nextToken?: string | null,
};

export type ModelGitHubUserFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  login?: ModelStringInput | null,
  nodeId?: ModelStringInput | null,
  apiUrl?: ModelStringInput | null,
  htmlUrl?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  name?: ModelStringInput | null,
  company?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelGitHubUserFilterInput | null > | null,
  or?: Array< ModelGitHubUserFilterInput | null > | null,
  not?: ModelGitHubUserFilterInput | null,
};

export type ModelGitHubUserConnection = {
  __typename: "ModelGitHubUserConnection",
  items?:  Array<GitHubUser | null > | null,
  nextToken?: string | null,
};

export type ModelPullRequestReviewRequestFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  dateFrom?: ModelStringInput | null,
  dateTo?: ModelStringInput | null,
  state?: ModelPullRequestReviewRequestStateInput | null,
  repositoryId?: ModelIDInput | null,
  pullRequestId?: ModelIDInput | null,
  reviewerId?: ModelIDInput | null,
  requesterId?: ModelIDInput | null,
  reviewId?: ModelIDInput | null,
  and?: Array< ModelPullRequestReviewRequestFilterInput | null > | null,
  or?: Array< ModelPullRequestReviewRequestFilterInput | null > | null,
  not?: ModelPullRequestReviewRequestFilterInput | null,
};

export type CreateGitHubIssueMutationVariables = {
  input?: CreateGitHubIssueInput,
  condition?: ModelGitHubIssueConditionInput | null,
};

export type CreateGitHubIssueMutation = {
  createGitHubIssue?:  {
    __typename: "GitHubIssue",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    apiUrl: string,
    htmlUrl: string,
    title: string,
    number: number,
    locked: boolean,
    state: GitHubIssueState,
    body: string,
    closedAt?: string | null,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    assignees?:  {
      __typename: "ModelIssueAsigneeConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateGitHubIssueMutationVariables = {
  input?: UpdateGitHubIssueInput,
  condition?: ModelGitHubIssueConditionInput | null,
};

export type UpdateGitHubIssueMutation = {
  updateGitHubIssue?:  {
    __typename: "GitHubIssue",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    apiUrl: string,
    htmlUrl: string,
    title: string,
    number: number,
    locked: boolean,
    state: GitHubIssueState,
    body: string,
    closedAt?: string | null,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    assignees?:  {
      __typename: "ModelIssueAsigneeConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteGitHubIssueMutationVariables = {
  input?: DeleteGitHubIssueInput,
  condition?: ModelGitHubIssueConditionInput | null,
};

export type DeleteGitHubIssueMutation = {
  deleteGitHubIssue?:  {
    __typename: "GitHubIssue",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    apiUrl: string,
    htmlUrl: string,
    title: string,
    number: number,
    locked: boolean,
    state: GitHubIssueState,
    body: string,
    closedAt?: string | null,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    assignees?:  {
      __typename: "ModelIssueAsigneeConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateIssueAsigneeMutationVariables = {
  input?: CreateIssueAsigneeInput,
  condition?: ModelIssueAsigneeConditionInput | null,
};

export type CreateIssueAsigneeMutation = {
  createIssueAsignee?:  {
    __typename: "IssueAsignee",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    issueId: string,
    userId: string,
    pullRequest:  {
      __typename: "GitHubIssue",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      state: GitHubIssueState,
      body: string,
      closedAt?: string | null,
      authorId: string,
      repositoryId: string,
    },
    user:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
  } | null,
};

export type UpdateIssueAsigneeMutationVariables = {
  input?: UpdateIssueAsigneeInput,
  condition?: ModelIssueAsigneeConditionInput | null,
};

export type UpdateIssueAsigneeMutation = {
  updateIssueAsignee?:  {
    __typename: "IssueAsignee",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    issueId: string,
    userId: string,
    pullRequest:  {
      __typename: "GitHubIssue",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      state: GitHubIssueState,
      body: string,
      closedAt?: string | null,
      authorId: string,
      repositoryId: string,
    },
    user:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
  } | null,
};

export type DeleteIssueAsigneeMutationVariables = {
  input?: DeleteIssueAsigneeInput,
  condition?: ModelIssueAsigneeConditionInput | null,
};

export type DeleteIssueAsigneeMutation = {
  deleteIssueAsignee?:  {
    __typename: "IssueAsignee",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    issueId: string,
    userId: string,
    pullRequest:  {
      __typename: "GitHubIssue",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      state: GitHubIssueState,
      body: string,
      closedAt?: string | null,
      authorId: string,
      repositoryId: string,
    },
    user:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
  } | null,
};

export type CreateTodoMutationVariables = {
  input?: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input?: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input?: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGitHubOrganizationMutationVariables = {
  input?: CreateGitHubOrganizationInput,
  condition?: ModelGitHubOrganizationConditionInput | null,
};

export type CreateGitHubOrganizationMutation = {
  createGitHubOrganization?:  {
    __typename: "GitHubOrganization",
    id: string,
    createdAt: string,
    updatedAt: string,
    login: string,
    nodeId: string,
    apiUrl: string,
    avatar?: string | null,
    email?: string | null,
  } | null,
};

export type UpdateGitHubOrganizationMutationVariables = {
  input?: UpdateGitHubOrganizationInput,
  condition?: ModelGitHubOrganizationConditionInput | null,
};

export type UpdateGitHubOrganizationMutation = {
  updateGitHubOrganization?:  {
    __typename: "GitHubOrganization",
    id: string,
    createdAt: string,
    updatedAt: string,
    login: string,
    nodeId: string,
    apiUrl: string,
    avatar?: string | null,
    email?: string | null,
  } | null,
};

export type DeleteGitHubOrganizationMutationVariables = {
  input?: DeleteGitHubOrganizationInput,
  condition?: ModelGitHubOrganizationConditionInput | null,
};

export type DeleteGitHubOrganizationMutation = {
  deleteGitHubOrganization?:  {
    __typename: "GitHubOrganization",
    id: string,
    createdAt: string,
    updatedAt: string,
    login: string,
    nodeId: string,
    apiUrl: string,
    avatar?: string | null,
    email?: string | null,
  } | null,
};

export type CreateGitHubPullRequestMutationVariables = {
  input?: CreateGitHubPullRequestInput,
  condition?: ModelGitHubPullRequestConditionInput | null,
};

export type CreateGitHubPullRequestMutation = {
  createGitHubPullRequest?:  {
    __typename: "GitHubPullRequest",
    id: string,
    createdAt: string,
    updatedAt: string,
    closedAt?: string | null,
    mergedAt?: string | null,
    apiUrl: string,
    htmlUrl: string,
    title: string,
    number: number,
    locked: boolean,
    body: string,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    assignees?:  {
      __typename: "ModelPullRequestAsigneeConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelPullRequestReviewConnection",
      nextToken?: string | null,
    } | null,
    reviewsRequested?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewComments?:  {
      __typename: "ModelPullRequestReviewCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateGitHubPullRequestMutationVariables = {
  input?: UpdateGitHubPullRequestInput,
  condition?: ModelGitHubPullRequestConditionInput | null,
};

export type UpdateGitHubPullRequestMutation = {
  updateGitHubPullRequest?:  {
    __typename: "GitHubPullRequest",
    id: string,
    createdAt: string,
    updatedAt: string,
    closedAt?: string | null,
    mergedAt?: string | null,
    apiUrl: string,
    htmlUrl: string,
    title: string,
    number: number,
    locked: boolean,
    body: string,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    assignees?:  {
      __typename: "ModelPullRequestAsigneeConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelPullRequestReviewConnection",
      nextToken?: string | null,
    } | null,
    reviewsRequested?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewComments?:  {
      __typename: "ModelPullRequestReviewCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteGitHubPullRequestMutationVariables = {
  input?: DeleteGitHubPullRequestInput,
  condition?: ModelGitHubPullRequestConditionInput | null,
};

export type DeleteGitHubPullRequestMutation = {
  deleteGitHubPullRequest?:  {
    __typename: "GitHubPullRequest",
    id: string,
    createdAt: string,
    updatedAt: string,
    closedAt?: string | null,
    mergedAt?: string | null,
    apiUrl: string,
    htmlUrl: string,
    title: string,
    number: number,
    locked: boolean,
    body: string,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    assignees?:  {
      __typename: "ModelPullRequestAsigneeConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelPullRequestReviewConnection",
      nextToken?: string | null,
    } | null,
    reviewsRequested?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewComments?:  {
      __typename: "ModelPullRequestReviewCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreatePullRequestAsigneeMutationVariables = {
  input?: CreatePullRequestAsigneeInput,
  condition?: ModelPullRequestAsigneeConditionInput | null,
};

export type CreatePullRequestAsigneeMutation = {
  createPullRequestAsignee?:  {
    __typename: "PullRequestAsignee",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    pullRequestId: string,
    userId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
    user:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
  } | null,
};

export type UpdatePullRequestAsigneeMutationVariables = {
  input?: UpdatePullRequestAsigneeInput,
  condition?: ModelPullRequestAsigneeConditionInput | null,
};

export type UpdatePullRequestAsigneeMutation = {
  updatePullRequestAsignee?:  {
    __typename: "PullRequestAsignee",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    pullRequestId: string,
    userId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
    user:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
  } | null,
};

export type DeletePullRequestAsigneeMutationVariables = {
  input?: DeletePullRequestAsigneeInput,
  condition?: ModelPullRequestAsigneeConditionInput | null,
};

export type DeletePullRequestAsigneeMutation = {
  deletePullRequestAsignee?:  {
    __typename: "PullRequestAsignee",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    pullRequestId: string,
    userId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
    user:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
  } | null,
};

export type CreatePullRequestReviewMutationVariables = {
  input?: CreatePullRequestReviewInput,
  condition?: ModelPullRequestReviewConditionInput | null,
};

export type CreatePullRequestReviewMutation = {
  createPullRequestReview?:  {
    __typename: "PullRequestReview",
    id: string,
    createdAt: string,
    updatedAt: string,
    body?: string | null,
    commitId?: string | null,
    submittedAt?: string | null,
    state: PullRequestReviewState,
    requestId: string,
    request:  {
      __typename: "PullRequestReviewRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      dateFrom: string,
      dateTo?: string | null,
      state: PullRequestReviewRequestState,
      repositoryId: string,
      pullRequestId: string,
      reviewerId: string,
      requesterId: string,
      reviewId: string,
    },
    comments?:  {
      __typename: "ModelPullRequestReviewCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdatePullRequestReviewMutationVariables = {
  input?: UpdatePullRequestReviewInput,
  condition?: ModelPullRequestReviewConditionInput | null,
};

export type UpdatePullRequestReviewMutation = {
  updatePullRequestReview?:  {
    __typename: "PullRequestReview",
    id: string,
    createdAt: string,
    updatedAt: string,
    body?: string | null,
    commitId?: string | null,
    submittedAt?: string | null,
    state: PullRequestReviewState,
    requestId: string,
    request:  {
      __typename: "PullRequestReviewRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      dateFrom: string,
      dateTo?: string | null,
      state: PullRequestReviewRequestState,
      repositoryId: string,
      pullRequestId: string,
      reviewerId: string,
      requesterId: string,
      reviewId: string,
    },
    comments?:  {
      __typename: "ModelPullRequestReviewCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeletePullRequestReviewMutationVariables = {
  input?: DeletePullRequestReviewInput,
  condition?: ModelPullRequestReviewConditionInput | null,
};

export type DeletePullRequestReviewMutation = {
  deletePullRequestReview?:  {
    __typename: "PullRequestReview",
    id: string,
    createdAt: string,
    updatedAt: string,
    body?: string | null,
    commitId?: string | null,
    submittedAt?: string | null,
    state: PullRequestReviewState,
    requestId: string,
    request:  {
      __typename: "PullRequestReviewRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      dateFrom: string,
      dateTo?: string | null,
      state: PullRequestReviewRequestState,
      repositoryId: string,
      pullRequestId: string,
      reviewerId: string,
      requesterId: string,
      reviewId: string,
    },
    comments?:  {
      __typename: "ModelPullRequestReviewCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreatePullRequestReviewCommentMutationVariables = {
  input?: CreatePullRequestReviewCommentInput,
  condition?: ModelPullRequestReviewCommentConditionInput | null,
};

export type CreatePullRequestReviewCommentMutation = {
  createPullRequestReviewComment?:  {
    __typename: "PullRequestReviewComment",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    path: string,
    diffHunk?: string | null,
    body: string,
    position: number,
    originalPosition: number,
    apiUrl: string,
    htmlUrl: string,
    commitId: string,
    originalCommitId: string,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    pullRequestReviewId: string,
    pullRequestReview:  {
      __typename: "PullRequestReview",
      id: string,
      createdAt: string,
      updatedAt: string,
      body?: string | null,
      commitId?: string | null,
      submittedAt?: string | null,
      state: PullRequestReviewState,
      requestId: string,
    },
    pullRequestId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
  } | null,
};

export type UpdatePullRequestReviewCommentMutationVariables = {
  input?: UpdatePullRequestReviewCommentInput,
  condition?: ModelPullRequestReviewCommentConditionInput | null,
};

export type UpdatePullRequestReviewCommentMutation = {
  updatePullRequestReviewComment?:  {
    __typename: "PullRequestReviewComment",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    path: string,
    diffHunk?: string | null,
    body: string,
    position: number,
    originalPosition: number,
    apiUrl: string,
    htmlUrl: string,
    commitId: string,
    originalCommitId: string,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    pullRequestReviewId: string,
    pullRequestReview:  {
      __typename: "PullRequestReview",
      id: string,
      createdAt: string,
      updatedAt: string,
      body?: string | null,
      commitId?: string | null,
      submittedAt?: string | null,
      state: PullRequestReviewState,
      requestId: string,
    },
    pullRequestId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
  } | null,
};

export type DeletePullRequestReviewCommentMutationVariables = {
  input?: DeletePullRequestReviewCommentInput,
  condition?: ModelPullRequestReviewCommentConditionInput | null,
};

export type DeletePullRequestReviewCommentMutation = {
  deletePullRequestReviewComment?:  {
    __typename: "PullRequestReviewComment",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    path: string,
    diffHunk?: string | null,
    body: string,
    position: number,
    originalPosition: number,
    apiUrl: string,
    htmlUrl: string,
    commitId: string,
    originalCommitId: string,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    pullRequestReviewId: string,
    pullRequestReview:  {
      __typename: "PullRequestReview",
      id: string,
      createdAt: string,
      updatedAt: string,
      body?: string | null,
      commitId?: string | null,
      submittedAt?: string | null,
      state: PullRequestReviewState,
      requestId: string,
    },
    pullRequestId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
  } | null,
};

export type CreateGitHubRepositoryMutationVariables = {
  input?: CreateGitHubRepositoryInput,
  condition?: ModelGitHubRepositoryConditionInput | null,
};

export type CreateGitHubRepositoryMutation = {
  createGitHubRepository?:  {
    __typename: "GitHubRepository",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    name: string,
    fullName: string,
    description?: string | null,
    apiUrl: string,
    htmlUrl: string,
    gitUrl: string,
    sshUrl: string,
    issues?:  {
      __typename: "ModelGitHubIssueConnection",
      nextToken?: string | null,
    } | null,
    pullRequests?:  {
      __typename: "ModelGitHubPullRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewRequests?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateGitHubRepositoryMutationVariables = {
  input?: UpdateGitHubRepositoryInput,
  condition?: ModelGitHubRepositoryConditionInput | null,
};

export type UpdateGitHubRepositoryMutation = {
  updateGitHubRepository?:  {
    __typename: "GitHubRepository",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    name: string,
    fullName: string,
    description?: string | null,
    apiUrl: string,
    htmlUrl: string,
    gitUrl: string,
    sshUrl: string,
    issues?:  {
      __typename: "ModelGitHubIssueConnection",
      nextToken?: string | null,
    } | null,
    pullRequests?:  {
      __typename: "ModelGitHubPullRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewRequests?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteGitHubRepositoryMutationVariables = {
  input?: DeleteGitHubRepositoryInput,
  condition?: ModelGitHubRepositoryConditionInput | null,
};

export type DeleteGitHubRepositoryMutation = {
  deleteGitHubRepository?:  {
    __typename: "GitHubRepository",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    name: string,
    fullName: string,
    description?: string | null,
    apiUrl: string,
    htmlUrl: string,
    gitUrl: string,
    sshUrl: string,
    issues?:  {
      __typename: "ModelGitHubIssueConnection",
      nextToken?: string | null,
    } | null,
    pullRequests?:  {
      __typename: "ModelGitHubPullRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewRequests?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateGitHubUserMutationVariables = {
  input?: CreateGitHubUserInput,
  condition?: ModelGitHubUserConditionInput | null,
};

export type CreateGitHubUserMutation = {
  createGitHubUser?:  {
    __typename: "GitHubUser",
    id: string,
    createdAt: string,
    updatedAt: string,
    login: string,
    nodeId: string,
    apiUrl: string,
    htmlUrl: string,
    avatar?: string | null,
    name?: string | null,
    company?: string | null,
    email?: string | null,
    issuesAuthored?:  {
      __typename: "ModelGitHubIssueConnection",
      nextToken?: string | null,
    } | null,
    issuesAssigned?:  {
      __typename: "ModelIssueAsigneeConnection",
      nextToken?: string | null,
    } | null,
    pullRequestsAuthored?:  {
      __typename: "ModelGitHubPullRequestConnection",
      nextToken?: string | null,
    } | null,
    pullRequestsAssigned?:  {
      __typename: "ModelPullRequestAsigneeConnection",
      nextToken?: string | null,
    } | null,
    reviewRequestsAuthored?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewRequestsAssigned?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateGitHubUserMutationVariables = {
  input?: UpdateGitHubUserInput,
  condition?: ModelGitHubUserConditionInput | null,
};

export type UpdateGitHubUserMutation = {
  updateGitHubUser?:  {
    __typename: "GitHubUser",
    id: string,
    createdAt: string,
    updatedAt: string,
    login: string,
    nodeId: string,
    apiUrl: string,
    htmlUrl: string,
    avatar?: string | null,
    name?: string | null,
    company?: string | null,
    email?: string | null,
    issuesAuthored?:  {
      __typename: "ModelGitHubIssueConnection",
      nextToken?: string | null,
    } | null,
    issuesAssigned?:  {
      __typename: "ModelIssueAsigneeConnection",
      nextToken?: string | null,
    } | null,
    pullRequestsAuthored?:  {
      __typename: "ModelGitHubPullRequestConnection",
      nextToken?: string | null,
    } | null,
    pullRequestsAssigned?:  {
      __typename: "ModelPullRequestAsigneeConnection",
      nextToken?: string | null,
    } | null,
    reviewRequestsAuthored?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewRequestsAssigned?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteGitHubUserMutationVariables = {
  input?: DeleteGitHubUserInput,
  condition?: ModelGitHubUserConditionInput | null,
};

export type DeleteGitHubUserMutation = {
  deleteGitHubUser?:  {
    __typename: "GitHubUser",
    id: string,
    createdAt: string,
    updatedAt: string,
    login: string,
    nodeId: string,
    apiUrl: string,
    htmlUrl: string,
    avatar?: string | null,
    name?: string | null,
    company?: string | null,
    email?: string | null,
    issuesAuthored?:  {
      __typename: "ModelGitHubIssueConnection",
      nextToken?: string | null,
    } | null,
    issuesAssigned?:  {
      __typename: "ModelIssueAsigneeConnection",
      nextToken?: string | null,
    } | null,
    pullRequestsAuthored?:  {
      __typename: "ModelGitHubPullRequestConnection",
      nextToken?: string | null,
    } | null,
    pullRequestsAssigned?:  {
      __typename: "ModelPullRequestAsigneeConnection",
      nextToken?: string | null,
    } | null,
    reviewRequestsAuthored?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewRequestsAssigned?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreatePullRequestReviewRequestMutationVariables = {
  input?: CreatePullRequestReviewRequestInput,
  condition?: ModelPullRequestReviewRequestConditionInput | null,
};

export type CreatePullRequestReviewRequestMutation = {
  createPullRequestReviewRequest?:  {
    __typename: "PullRequestReviewRequest",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    state: PullRequestReviewRequestState,
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    pullRequestId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
    reviewerId: string,
    reviewer:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    requesterId: string,
    requester:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    reviewId: string,
    review:  {
      __typename: "PullRequestReview",
      id: string,
      createdAt: string,
      updatedAt: string,
      body?: string | null,
      commitId?: string | null,
      submittedAt?: string | null,
      state: PullRequestReviewState,
      requestId: string,
    },
  } | null,
};

export type UpdatePullRequestReviewRequestMutationVariables = {
  input?: UpdatePullRequestReviewRequestInput,
  condition?: ModelPullRequestReviewRequestConditionInput | null,
};

export type UpdatePullRequestReviewRequestMutation = {
  updatePullRequestReviewRequest?:  {
    __typename: "PullRequestReviewRequest",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    state: PullRequestReviewRequestState,
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    pullRequestId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
    reviewerId: string,
    reviewer:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    requesterId: string,
    requester:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    reviewId: string,
    review:  {
      __typename: "PullRequestReview",
      id: string,
      createdAt: string,
      updatedAt: string,
      body?: string | null,
      commitId?: string | null,
      submittedAt?: string | null,
      state: PullRequestReviewState,
      requestId: string,
    },
  } | null,
};

export type DeletePullRequestReviewRequestMutationVariables = {
  input?: DeletePullRequestReviewRequestInput,
  condition?: ModelPullRequestReviewRequestConditionInput | null,
};

export type DeletePullRequestReviewRequestMutation = {
  deletePullRequestReviewRequest?:  {
    __typename: "PullRequestReviewRequest",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    state: PullRequestReviewRequestState,
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    pullRequestId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
    reviewerId: string,
    reviewer:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    requesterId: string,
    requester:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    reviewId: string,
    review:  {
      __typename: "PullRequestReview",
      id: string,
      createdAt: string,
      updatedAt: string,
      body?: string | null,
      commitId?: string | null,
      submittedAt?: string | null,
      state: PullRequestReviewState,
      requestId: string,
    },
  } | null,
};

export type GetGitHubIssueQueryVariables = {
  id?: string,
};

export type GetGitHubIssueQuery = {
  getGitHubIssue?:  {
    __typename: "GitHubIssue",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    apiUrl: string,
    htmlUrl: string,
    title: string,
    number: number,
    locked: boolean,
    state: GitHubIssueState,
    body: string,
    closedAt?: string | null,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    assignees?:  {
      __typename: "ModelIssueAsigneeConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListGitHubIssuesQueryVariables = {
  filter?: ModelGitHubIssueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGitHubIssuesQuery = {
  listGitHubIssues?:  {
    __typename: "ModelGitHubIssueConnection",
    items?:  Array< {
      __typename: "GitHubIssue",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      state: GitHubIssueState,
      body: string,
      closedAt?: string | null,
      authorId: string,
      repositoryId: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id?: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items?:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGitHubOrganizationQueryVariables = {
  id?: string,
  login?: string,
};

export type GetGitHubOrganizationQuery = {
  getGitHubOrganization?:  {
    __typename: "GitHubOrganization",
    id: string,
    createdAt: string,
    updatedAt: string,
    login: string,
    nodeId: string,
    apiUrl: string,
    avatar?: string | null,
    email?: string | null,
  } | null,
};

export type ListGitHubOrganizationsQueryVariables = {
  id?: string | null,
  login?: ModelStringKeyConditionInput | null,
  filter?: ModelGitHubOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGitHubOrganizationsQuery = {
  listGitHubOrganizations?:  {
    __typename: "ModelGitHubOrganizationConnection",
    items?:  Array< {
      __typename: "GitHubOrganization",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      avatar?: string | null,
      email?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGitHubPullRequestQueryVariables = {
  id?: string,
};

export type GetGitHubPullRequestQuery = {
  getGitHubPullRequest?:  {
    __typename: "GitHubPullRequest",
    id: string,
    createdAt: string,
    updatedAt: string,
    closedAt?: string | null,
    mergedAt?: string | null,
    apiUrl: string,
    htmlUrl: string,
    title: string,
    number: number,
    locked: boolean,
    body: string,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    assignees?:  {
      __typename: "ModelPullRequestAsigneeConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelPullRequestReviewConnection",
      nextToken?: string | null,
    } | null,
    reviewsRequested?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewComments?:  {
      __typename: "ModelPullRequestReviewCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListGitHubPullRequestsQueryVariables = {
  filter?: ModelGitHubPullRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGitHubPullRequestsQuery = {
  listGitHubPullRequests?:  {
    __typename: "ModelGitHubPullRequestConnection",
    items?:  Array< {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPullRequestReviewQueryVariables = {
  id?: string,
};

export type GetPullRequestReviewQuery = {
  getPullRequestReview?:  {
    __typename: "PullRequestReview",
    id: string,
    createdAt: string,
    updatedAt: string,
    body?: string | null,
    commitId?: string | null,
    submittedAt?: string | null,
    state: PullRequestReviewState,
    requestId: string,
    request:  {
      __typename: "PullRequestReviewRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      dateFrom: string,
      dateTo?: string | null,
      state: PullRequestReviewRequestState,
      repositoryId: string,
      pullRequestId: string,
      reviewerId: string,
      requesterId: string,
      reviewId: string,
    },
    comments?:  {
      __typename: "ModelPullRequestReviewCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListPullRequestReviewsQueryVariables = {
  filter?: ModelPullRequestReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPullRequestReviewsQuery = {
  listPullRequestReviews?:  {
    __typename: "ModelPullRequestReviewConnection",
    items?:  Array< {
      __typename: "PullRequestReview",
      id: string,
      createdAt: string,
      updatedAt: string,
      body?: string | null,
      commitId?: string | null,
      submittedAt?: string | null,
      state: PullRequestReviewState,
      requestId: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPullRequestReviewCommentQueryVariables = {
  id?: string,
};

export type GetPullRequestReviewCommentQuery = {
  getPullRequestReviewComment?:  {
    __typename: "PullRequestReviewComment",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    path: string,
    diffHunk?: string | null,
    body: string,
    position: number,
    originalPosition: number,
    apiUrl: string,
    htmlUrl: string,
    commitId: string,
    originalCommitId: string,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    pullRequestReviewId: string,
    pullRequestReview:  {
      __typename: "PullRequestReview",
      id: string,
      createdAt: string,
      updatedAt: string,
      body?: string | null,
      commitId?: string | null,
      submittedAt?: string | null,
      state: PullRequestReviewState,
      requestId: string,
    },
    pullRequestId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
  } | null,
};

export type ListPullRequestReviewCommentsQueryVariables = {
  filter?: ModelPullRequestReviewCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPullRequestReviewCommentsQuery = {
  listPullRequestReviewComments?:  {
    __typename: "ModelPullRequestReviewCommentConnection",
    items?:  Array< {
      __typename: "PullRequestReviewComment",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      path: string,
      diffHunk?: string | null,
      body: string,
      position: number,
      originalPosition: number,
      apiUrl: string,
      htmlUrl: string,
      commitId: string,
      originalCommitId: string,
      authorId: string,
      pullRequestReviewId: string,
      pullRequestId: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGitHubRepositoryQueryVariables = {
  id?: string,
};

export type GetGitHubRepositoryQuery = {
  getGitHubRepository?:  {
    __typename: "GitHubRepository",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    name: string,
    fullName: string,
    description?: string | null,
    apiUrl: string,
    htmlUrl: string,
    gitUrl: string,
    sshUrl: string,
    issues?:  {
      __typename: "ModelGitHubIssueConnection",
      nextToken?: string | null,
    } | null,
    pullRequests?:  {
      __typename: "ModelGitHubPullRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewRequests?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListGitHubRepositorysQueryVariables = {
  filter?: ModelGitHubRepositoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGitHubRepositorysQuery = {
  listGitHubRepositorys?:  {
    __typename: "ModelGitHubRepositoryConnection",
    items?:  Array< {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGitHubUserQueryVariables = {
  id?: string,
  login?: string,
};

export type GetGitHubUserQuery = {
  getGitHubUser?:  {
    __typename: "GitHubUser",
    id: string,
    createdAt: string,
    updatedAt: string,
    login: string,
    nodeId: string,
    apiUrl: string,
    htmlUrl: string,
    avatar?: string | null,
    name?: string | null,
    company?: string | null,
    email?: string | null,
    issuesAuthored?:  {
      __typename: "ModelGitHubIssueConnection",
      nextToken?: string | null,
    } | null,
    issuesAssigned?:  {
      __typename: "ModelIssueAsigneeConnection",
      nextToken?: string | null,
    } | null,
    pullRequestsAuthored?:  {
      __typename: "ModelGitHubPullRequestConnection",
      nextToken?: string | null,
    } | null,
    pullRequestsAssigned?:  {
      __typename: "ModelPullRequestAsigneeConnection",
      nextToken?: string | null,
    } | null,
    reviewRequestsAuthored?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewRequestsAssigned?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListGitHubUsersQueryVariables = {
  id?: string | null,
  login?: ModelStringKeyConditionInput | null,
  filter?: ModelGitHubUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGitHubUsersQuery = {
  listGitHubUsers?:  {
    __typename: "ModelGitHubUserConnection",
    items?:  Array< {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPullRequestReviewRequestQueryVariables = {
  id?: string,
};

export type GetPullRequestReviewRequestQuery = {
  getPullRequestReviewRequest?:  {
    __typename: "PullRequestReviewRequest",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    state: PullRequestReviewRequestState,
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    pullRequestId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
    reviewerId: string,
    reviewer:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    requesterId: string,
    requester:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    reviewId: string,
    review:  {
      __typename: "PullRequestReview",
      id: string,
      createdAt: string,
      updatedAt: string,
      body?: string | null,
      commitId?: string | null,
      submittedAt?: string | null,
      state: PullRequestReviewState,
      requestId: string,
    },
  } | null,
};

export type ListPullRequestReviewRequestsQueryVariables = {
  filter?: ModelPullRequestReviewRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPullRequestReviewRequestsQuery = {
  listPullRequestReviewRequests?:  {
    __typename: "ModelPullRequestReviewRequestConnection",
    items?:  Array< {
      __typename: "PullRequestReviewRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      dateFrom: string,
      dateTo?: string | null,
      state: PullRequestReviewRequestState,
      repositoryId: string,
      pullRequestId: string,
      reviewerId: string,
      requesterId: string,
      reviewId: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGitHubIssueSubscription = {
  onCreateGitHubIssue?:  {
    __typename: "GitHubIssue",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    apiUrl: string,
    htmlUrl: string,
    title: string,
    number: number,
    locked: boolean,
    state: GitHubIssueState,
    body: string,
    closedAt?: string | null,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    assignees?:  {
      __typename: "ModelIssueAsigneeConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateGitHubIssueSubscription = {
  onUpdateGitHubIssue?:  {
    __typename: "GitHubIssue",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    apiUrl: string,
    htmlUrl: string,
    title: string,
    number: number,
    locked: boolean,
    state: GitHubIssueState,
    body: string,
    closedAt?: string | null,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    assignees?:  {
      __typename: "ModelIssueAsigneeConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteGitHubIssueSubscription = {
  onDeleteGitHubIssue?:  {
    __typename: "GitHubIssue",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    apiUrl: string,
    htmlUrl: string,
    title: string,
    number: number,
    locked: boolean,
    state: GitHubIssueState,
    body: string,
    closedAt?: string | null,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    assignees?:  {
      __typename: "ModelIssueAsigneeConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateIssueAsigneeSubscription = {
  onCreateIssueAsignee?:  {
    __typename: "IssueAsignee",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    issueId: string,
    userId: string,
    pullRequest:  {
      __typename: "GitHubIssue",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      state: GitHubIssueState,
      body: string,
      closedAt?: string | null,
      authorId: string,
      repositoryId: string,
    },
    user:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
  } | null,
};

export type OnUpdateIssueAsigneeSubscription = {
  onUpdateIssueAsignee?:  {
    __typename: "IssueAsignee",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    issueId: string,
    userId: string,
    pullRequest:  {
      __typename: "GitHubIssue",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      state: GitHubIssueState,
      body: string,
      closedAt?: string | null,
      authorId: string,
      repositoryId: string,
    },
    user:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
  } | null,
};

export type OnDeleteIssueAsigneeSubscription = {
  onDeleteIssueAsignee?:  {
    __typename: "IssueAsignee",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    issueId: string,
    userId: string,
    pullRequest:  {
      __typename: "GitHubIssue",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      state: GitHubIssueState,
      body: string,
      closedAt?: string | null,
      authorId: string,
      repositoryId: string,
    },
    user:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGitHubOrganizationSubscription = {
  onCreateGitHubOrganization?:  {
    __typename: "GitHubOrganization",
    id: string,
    createdAt: string,
    updatedAt: string,
    login: string,
    nodeId: string,
    apiUrl: string,
    avatar?: string | null,
    email?: string | null,
  } | null,
};

export type OnUpdateGitHubOrganizationSubscription = {
  onUpdateGitHubOrganization?:  {
    __typename: "GitHubOrganization",
    id: string,
    createdAt: string,
    updatedAt: string,
    login: string,
    nodeId: string,
    apiUrl: string,
    avatar?: string | null,
    email?: string | null,
  } | null,
};

export type OnDeleteGitHubOrganizationSubscription = {
  onDeleteGitHubOrganization?:  {
    __typename: "GitHubOrganization",
    id: string,
    createdAt: string,
    updatedAt: string,
    login: string,
    nodeId: string,
    apiUrl: string,
    avatar?: string | null,
    email?: string | null,
  } | null,
};

export type OnCreateGitHubPullRequestSubscription = {
  onCreateGitHubPullRequest?:  {
    __typename: "GitHubPullRequest",
    id: string,
    createdAt: string,
    updatedAt: string,
    closedAt?: string | null,
    mergedAt?: string | null,
    apiUrl: string,
    htmlUrl: string,
    title: string,
    number: number,
    locked: boolean,
    body: string,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    assignees?:  {
      __typename: "ModelPullRequestAsigneeConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelPullRequestReviewConnection",
      nextToken?: string | null,
    } | null,
    reviewsRequested?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewComments?:  {
      __typename: "ModelPullRequestReviewCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateGitHubPullRequestSubscription = {
  onUpdateGitHubPullRequest?:  {
    __typename: "GitHubPullRequest",
    id: string,
    createdAt: string,
    updatedAt: string,
    closedAt?: string | null,
    mergedAt?: string | null,
    apiUrl: string,
    htmlUrl: string,
    title: string,
    number: number,
    locked: boolean,
    body: string,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    assignees?:  {
      __typename: "ModelPullRequestAsigneeConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelPullRequestReviewConnection",
      nextToken?: string | null,
    } | null,
    reviewsRequested?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewComments?:  {
      __typename: "ModelPullRequestReviewCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteGitHubPullRequestSubscription = {
  onDeleteGitHubPullRequest?:  {
    __typename: "GitHubPullRequest",
    id: string,
    createdAt: string,
    updatedAt: string,
    closedAt?: string | null,
    mergedAt?: string | null,
    apiUrl: string,
    htmlUrl: string,
    title: string,
    number: number,
    locked: boolean,
    body: string,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    assignees?:  {
      __typename: "ModelPullRequestAsigneeConnection",
      nextToken?: string | null,
    } | null,
    reviews?:  {
      __typename: "ModelPullRequestReviewConnection",
      nextToken?: string | null,
    } | null,
    reviewsRequested?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewComments?:  {
      __typename: "ModelPullRequestReviewCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreatePullRequestAsigneeSubscription = {
  onCreatePullRequestAsignee?:  {
    __typename: "PullRequestAsignee",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    pullRequestId: string,
    userId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
    user:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
  } | null,
};

export type OnUpdatePullRequestAsigneeSubscription = {
  onUpdatePullRequestAsignee?:  {
    __typename: "PullRequestAsignee",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    pullRequestId: string,
    userId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
    user:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
  } | null,
};

export type OnDeletePullRequestAsigneeSubscription = {
  onDeletePullRequestAsignee?:  {
    __typename: "PullRequestAsignee",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    pullRequestId: string,
    userId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
    user:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
  } | null,
};

export type OnCreatePullRequestReviewSubscription = {
  onCreatePullRequestReview?:  {
    __typename: "PullRequestReview",
    id: string,
    createdAt: string,
    updatedAt: string,
    body?: string | null,
    commitId?: string | null,
    submittedAt?: string | null,
    state: PullRequestReviewState,
    requestId: string,
    request:  {
      __typename: "PullRequestReviewRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      dateFrom: string,
      dateTo?: string | null,
      state: PullRequestReviewRequestState,
      repositoryId: string,
      pullRequestId: string,
      reviewerId: string,
      requesterId: string,
      reviewId: string,
    },
    comments?:  {
      __typename: "ModelPullRequestReviewCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePullRequestReviewSubscription = {
  onUpdatePullRequestReview?:  {
    __typename: "PullRequestReview",
    id: string,
    createdAt: string,
    updatedAt: string,
    body?: string | null,
    commitId?: string | null,
    submittedAt?: string | null,
    state: PullRequestReviewState,
    requestId: string,
    request:  {
      __typename: "PullRequestReviewRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      dateFrom: string,
      dateTo?: string | null,
      state: PullRequestReviewRequestState,
      repositoryId: string,
      pullRequestId: string,
      reviewerId: string,
      requesterId: string,
      reviewId: string,
    },
    comments?:  {
      __typename: "ModelPullRequestReviewCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeletePullRequestReviewSubscription = {
  onDeletePullRequestReview?:  {
    __typename: "PullRequestReview",
    id: string,
    createdAt: string,
    updatedAt: string,
    body?: string | null,
    commitId?: string | null,
    submittedAt?: string | null,
    state: PullRequestReviewState,
    requestId: string,
    request:  {
      __typename: "PullRequestReviewRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      dateFrom: string,
      dateTo?: string | null,
      state: PullRequestReviewRequestState,
      repositoryId: string,
      pullRequestId: string,
      reviewerId: string,
      requesterId: string,
      reviewId: string,
    },
    comments?:  {
      __typename: "ModelPullRequestReviewCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreatePullRequestReviewCommentSubscription = {
  onCreatePullRequestReviewComment?:  {
    __typename: "PullRequestReviewComment",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    path: string,
    diffHunk?: string | null,
    body: string,
    position: number,
    originalPosition: number,
    apiUrl: string,
    htmlUrl: string,
    commitId: string,
    originalCommitId: string,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    pullRequestReviewId: string,
    pullRequestReview:  {
      __typename: "PullRequestReview",
      id: string,
      createdAt: string,
      updatedAt: string,
      body?: string | null,
      commitId?: string | null,
      submittedAt?: string | null,
      state: PullRequestReviewState,
      requestId: string,
    },
    pullRequestId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
  } | null,
};

export type OnUpdatePullRequestReviewCommentSubscription = {
  onUpdatePullRequestReviewComment?:  {
    __typename: "PullRequestReviewComment",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    path: string,
    diffHunk?: string | null,
    body: string,
    position: number,
    originalPosition: number,
    apiUrl: string,
    htmlUrl: string,
    commitId: string,
    originalCommitId: string,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    pullRequestReviewId: string,
    pullRequestReview:  {
      __typename: "PullRequestReview",
      id: string,
      createdAt: string,
      updatedAt: string,
      body?: string | null,
      commitId?: string | null,
      submittedAt?: string | null,
      state: PullRequestReviewState,
      requestId: string,
    },
    pullRequestId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
  } | null,
};

export type OnDeletePullRequestReviewCommentSubscription = {
  onDeletePullRequestReviewComment?:  {
    __typename: "PullRequestReviewComment",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    path: string,
    diffHunk?: string | null,
    body: string,
    position: number,
    originalPosition: number,
    apiUrl: string,
    htmlUrl: string,
    commitId: string,
    originalCommitId: string,
    authorId: string,
    author:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    pullRequestReviewId: string,
    pullRequestReview:  {
      __typename: "PullRequestReview",
      id: string,
      createdAt: string,
      updatedAt: string,
      body?: string | null,
      commitId?: string | null,
      submittedAt?: string | null,
      state: PullRequestReviewState,
      requestId: string,
    },
    pullRequestId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
  } | null,
};

export type OnCreateGitHubRepositorySubscription = {
  onCreateGitHubRepository?:  {
    __typename: "GitHubRepository",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    name: string,
    fullName: string,
    description?: string | null,
    apiUrl: string,
    htmlUrl: string,
    gitUrl: string,
    sshUrl: string,
    issues?:  {
      __typename: "ModelGitHubIssueConnection",
      nextToken?: string | null,
    } | null,
    pullRequests?:  {
      __typename: "ModelGitHubPullRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewRequests?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateGitHubRepositorySubscription = {
  onUpdateGitHubRepository?:  {
    __typename: "GitHubRepository",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    name: string,
    fullName: string,
    description?: string | null,
    apiUrl: string,
    htmlUrl: string,
    gitUrl: string,
    sshUrl: string,
    issues?:  {
      __typename: "ModelGitHubIssueConnection",
      nextToken?: string | null,
    } | null,
    pullRequests?:  {
      __typename: "ModelGitHubPullRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewRequests?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteGitHubRepositorySubscription = {
  onDeleteGitHubRepository?:  {
    __typename: "GitHubRepository",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    name: string,
    fullName: string,
    description?: string | null,
    apiUrl: string,
    htmlUrl: string,
    gitUrl: string,
    sshUrl: string,
    issues?:  {
      __typename: "ModelGitHubIssueConnection",
      nextToken?: string | null,
    } | null,
    pullRequests?:  {
      __typename: "ModelGitHubPullRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewRequests?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateGitHubUserSubscription = {
  onCreateGitHubUser?:  {
    __typename: "GitHubUser",
    id: string,
    createdAt: string,
    updatedAt: string,
    login: string,
    nodeId: string,
    apiUrl: string,
    htmlUrl: string,
    avatar?: string | null,
    name?: string | null,
    company?: string | null,
    email?: string | null,
    issuesAuthored?:  {
      __typename: "ModelGitHubIssueConnection",
      nextToken?: string | null,
    } | null,
    issuesAssigned?:  {
      __typename: "ModelIssueAsigneeConnection",
      nextToken?: string | null,
    } | null,
    pullRequestsAuthored?:  {
      __typename: "ModelGitHubPullRequestConnection",
      nextToken?: string | null,
    } | null,
    pullRequestsAssigned?:  {
      __typename: "ModelPullRequestAsigneeConnection",
      nextToken?: string | null,
    } | null,
    reviewRequestsAuthored?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewRequestsAssigned?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateGitHubUserSubscription = {
  onUpdateGitHubUser?:  {
    __typename: "GitHubUser",
    id: string,
    createdAt: string,
    updatedAt: string,
    login: string,
    nodeId: string,
    apiUrl: string,
    htmlUrl: string,
    avatar?: string | null,
    name?: string | null,
    company?: string | null,
    email?: string | null,
    issuesAuthored?:  {
      __typename: "ModelGitHubIssueConnection",
      nextToken?: string | null,
    } | null,
    issuesAssigned?:  {
      __typename: "ModelIssueAsigneeConnection",
      nextToken?: string | null,
    } | null,
    pullRequestsAuthored?:  {
      __typename: "ModelGitHubPullRequestConnection",
      nextToken?: string | null,
    } | null,
    pullRequestsAssigned?:  {
      __typename: "ModelPullRequestAsigneeConnection",
      nextToken?: string | null,
    } | null,
    reviewRequestsAuthored?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewRequestsAssigned?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteGitHubUserSubscription = {
  onDeleteGitHubUser?:  {
    __typename: "GitHubUser",
    id: string,
    createdAt: string,
    updatedAt: string,
    login: string,
    nodeId: string,
    apiUrl: string,
    htmlUrl: string,
    avatar?: string | null,
    name?: string | null,
    company?: string | null,
    email?: string | null,
    issuesAuthored?:  {
      __typename: "ModelGitHubIssueConnection",
      nextToken?: string | null,
    } | null,
    issuesAssigned?:  {
      __typename: "ModelIssueAsigneeConnection",
      nextToken?: string | null,
    } | null,
    pullRequestsAuthored?:  {
      __typename: "ModelGitHubPullRequestConnection",
      nextToken?: string | null,
    } | null,
    pullRequestsAssigned?:  {
      __typename: "ModelPullRequestAsigneeConnection",
      nextToken?: string | null,
    } | null,
    reviewRequestsAuthored?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
    reviewRequestsAssigned?:  {
      __typename: "ModelPullRequestReviewRequestConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreatePullRequestReviewRequestSubscription = {
  onCreatePullRequestReviewRequest?:  {
    __typename: "PullRequestReviewRequest",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    state: PullRequestReviewRequestState,
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    pullRequestId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
    reviewerId: string,
    reviewer:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    requesterId: string,
    requester:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    reviewId: string,
    review:  {
      __typename: "PullRequestReview",
      id: string,
      createdAt: string,
      updatedAt: string,
      body?: string | null,
      commitId?: string | null,
      submittedAt?: string | null,
      state: PullRequestReviewState,
      requestId: string,
    },
  } | null,
};

export type OnUpdatePullRequestReviewRequestSubscription = {
  onUpdatePullRequestReviewRequest?:  {
    __typename: "PullRequestReviewRequest",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    state: PullRequestReviewRequestState,
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    pullRequestId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
    reviewerId: string,
    reviewer:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    requesterId: string,
    requester:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    reviewId: string,
    review:  {
      __typename: "PullRequestReview",
      id: string,
      createdAt: string,
      updatedAt: string,
      body?: string | null,
      commitId?: string | null,
      submittedAt?: string | null,
      state: PullRequestReviewState,
      requestId: string,
    },
  } | null,
};

export type OnDeletePullRequestReviewRequestSubscription = {
  onDeletePullRequestReviewRequest?:  {
    __typename: "PullRequestReviewRequest",
    id: string,
    createdAt: string,
    updatedAt: string,
    dateFrom: string,
    dateTo?: string | null,
    state: PullRequestReviewRequestState,
    repositoryId: string,
    repository:  {
      __typename: "GitHubRepository",
      id: string,
      createdAt: string,
      updatedAt: string,
      nodeId: string,
      name: string,
      fullName: string,
      description?: string | null,
      apiUrl: string,
      htmlUrl: string,
      gitUrl: string,
      sshUrl: string,
    },
    pullRequestId: string,
    pullRequest:  {
      __typename: "GitHubPullRequest",
      id: string,
      createdAt: string,
      updatedAt: string,
      closedAt?: string | null,
      mergedAt?: string | null,
      apiUrl: string,
      htmlUrl: string,
      title: string,
      number: number,
      locked: boolean,
      body: string,
      authorId: string,
      repositoryId: string,
    },
    reviewerId: string,
    reviewer:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    requesterId: string,
    requester:  {
      __typename: "GitHubUser",
      id: string,
      createdAt: string,
      updatedAt: string,
      login: string,
      nodeId: string,
      apiUrl: string,
      htmlUrl: string,
      avatar?: string | null,
      name?: string | null,
      company?: string | null,
      email?: string | null,
    },
    reviewId: string,
    review:  {
      __typename: "PullRequestReview",
      id: string,
      createdAt: string,
      updatedAt: string,
      body?: string | null,
      commitId?: string | null,
      submittedAt?: string | null,
      state: PullRequestReviewState,
      requestId: string,
    },
  } | null,
};
