/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGitHubIssue = /* GraphQL */ `
  query GetGitHubIssue($id: ID!) {
    getGitHubIssue(id: $id) {
      id
      createdAt
      updatedAt
      nodeId
      apiUrl
      htmlUrl
      title
      number
      locked
      state
      body
      closedAt
      authorId
      author {
        id
        createdAt
        updatedAt
        login
        nodeId
        apiUrl
        htmlUrl
        avatar
        name
        company
        email
      }
      repositoryId
      repository {
        id
        createdAt
        updatedAt
        nodeId
        name
        fullName
        description
        apiUrl
        htmlUrl
        gitUrl
        sshUrl
      }
      assignees {
        nextToken
      }
    }
  }
`;
export const listGitHubIssues = /* GraphQL */ `
  query ListGitHubIssues(
    $filter: ModelGitHubIssueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGitHubIssues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        nodeId
        apiUrl
        htmlUrl
        title
        number
        locked
        state
        body
        closedAt
        authorId
        repositoryId
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGitHubOrganization = /* GraphQL */ `
  query GetGitHubOrganization($id: ID!, $login: String!) {
    getGitHubOrganization(id: $id, login: $login) {
      id
      createdAt
      updatedAt
      login
      nodeId
      apiUrl
      avatar
      email
    }
  }
`;
export const listGitHubOrganizations = /* GraphQL */ `
  query ListGitHubOrganizations(
    $id: ID
    $login: ModelStringKeyConditionInput
    $filter: ModelGitHubOrganizationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGitHubOrganizations(
      id: $id
      login: $login
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        createdAt
        updatedAt
        login
        nodeId
        apiUrl
        avatar
        email
      }
      nextToken
    }
  }
`;
export const getGitHubPullRequest = /* GraphQL */ `
  query GetGitHubPullRequest($id: ID!) {
    getGitHubPullRequest(id: $id) {
      id
      createdAt
      updatedAt
      closedAt
      mergedAt
      apiUrl
      htmlUrl
      title
      number
      locked
      body
      authorId
      author {
        id
        createdAt
        updatedAt
        login
        nodeId
        apiUrl
        htmlUrl
        avatar
        name
        company
        email
      }
      repositoryId
      repository {
        id
        createdAt
        updatedAt
        nodeId
        name
        fullName
        description
        apiUrl
        htmlUrl
        gitUrl
        sshUrl
      }
      assignees {
        nextToken
      }
      reviews {
        nextToken
      }
      reviewsRequested {
        nextToken
      }
      reviewComments {
        nextToken
      }
    }
  }
`;
export const listGitHubPullRequests = /* GraphQL */ `
  query ListGitHubPullRequests(
    $filter: ModelGitHubPullRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGitHubPullRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        closedAt
        mergedAt
        apiUrl
        htmlUrl
        title
        number
        locked
        body
        authorId
        repositoryId
      }
      nextToken
    }
  }
`;
export const getPullRequestReview = /* GraphQL */ `
  query GetPullRequestReview($id: ID!) {
    getPullRequestReview(id: $id) {
      id
      createdAt
      updatedAt
      body
      commitId
      submittedAt
      state
      requestId
      request {
        id
        createdAt
        updatedAt
        dateFrom
        dateTo
        state
        repositoryId
        pullRequestId
        reviewerId
        requesterId
        reviewId
      }
      comments {
        nextToken
      }
    }
  }
`;
export const listPullRequestReviews = /* GraphQL */ `
  query ListPullRequestReviews(
    $filter: ModelPullRequestReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPullRequestReviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        body
        commitId
        submittedAt
        state
        requestId
      }
      nextToken
    }
  }
`;
export const getPullRequestReviewComment = /* GraphQL */ `
  query GetPullRequestReviewComment($id: ID!) {
    getPullRequestReviewComment(id: $id) {
      id
      createdAt
      updatedAt
      nodeId
      path
      diffHunk
      body
      position
      originalPosition
      apiUrl
      htmlUrl
      commitId
      originalCommitId
      authorId
      author {
        id
        createdAt
        updatedAt
        login
        nodeId
        apiUrl
        htmlUrl
        avatar
        name
        company
        email
      }
      pullRequestReviewId
      pullRequestReview {
        id
        createdAt
        updatedAt
        body
        commitId
        submittedAt
        state
        requestId
      }
      pullRequestId
      pullRequest {
        id
        createdAt
        updatedAt
        closedAt
        mergedAt
        apiUrl
        htmlUrl
        title
        number
        locked
        body
        authorId
        repositoryId
      }
    }
  }
`;
export const listPullRequestReviewComments = /* GraphQL */ `
  query ListPullRequestReviewComments(
    $filter: ModelPullRequestReviewCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPullRequestReviewComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        nodeId
        path
        diffHunk
        body
        position
        originalPosition
        apiUrl
        htmlUrl
        commitId
        originalCommitId
        authorId
        pullRequestReviewId
        pullRequestId
      }
      nextToken
    }
  }
`;
export const getGitHubRepository = /* GraphQL */ `
  query GetGitHubRepository($id: ID!) {
    getGitHubRepository(id: $id) {
      id
      createdAt
      updatedAt
      nodeId
      name
      fullName
      description
      apiUrl
      htmlUrl
      gitUrl
      sshUrl
      issues {
        nextToken
      }
      pullRequests {
        nextToken
      }
      reviewRequests {
        nextToken
      }
    }
  }
`;
export const listGitHubRepositorys = /* GraphQL */ `
  query ListGitHubRepositorys(
    $filter: ModelGitHubRepositoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGitHubRepositorys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        nodeId
        name
        fullName
        description
        apiUrl
        htmlUrl
        gitUrl
        sshUrl
      }
      nextToken
    }
  }
`;
export const getGitHubUser = /* GraphQL */ `
  query GetGitHubUser($id: ID!, $login: String!) {
    getGitHubUser(id: $id, login: $login) {
      id
      createdAt
      updatedAt
      login
      nodeId
      apiUrl
      htmlUrl
      avatar
      name
      company
      email
      issuesAuthored {
        nextToken
      }
      issuesAssigned {
        nextToken
      }
      pullRequestsAuthored {
        nextToken
      }
      pullRequestsAssigned {
        nextToken
      }
      reviewRequestsAuthored {
        nextToken
      }
      reviewRequestsAssigned {
        nextToken
      }
    }
  }
`;
export const listGitHubUsers = /* GraphQL */ `
  query ListGitHubUsers(
    $id: ID
    $login: ModelStringKeyConditionInput
    $filter: ModelGitHubUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGitHubUsers(
      id: $id
      login: $login
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        createdAt
        updatedAt
        login
        nodeId
        apiUrl
        htmlUrl
        avatar
        name
        company
        email
      }
      nextToken
    }
  }
`;
export const getPullRequestReviewRequest = /* GraphQL */ `
  query GetPullRequestReviewRequest($id: ID!) {
    getPullRequestReviewRequest(id: $id) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
      state
      repositoryId
      repository {
        id
        createdAt
        updatedAt
        nodeId
        name
        fullName
        description
        apiUrl
        htmlUrl
        gitUrl
        sshUrl
      }
      pullRequestId
      pullRequest {
        id
        createdAt
        updatedAt
        closedAt
        mergedAt
        apiUrl
        htmlUrl
        title
        number
        locked
        body
        authorId
        repositoryId
      }
      reviewerId
      reviewer {
        id
        createdAt
        updatedAt
        login
        nodeId
        apiUrl
        htmlUrl
        avatar
        name
        company
        email
      }
      requesterId
      requester {
        id
        createdAt
        updatedAt
        login
        nodeId
        apiUrl
        htmlUrl
        avatar
        name
        company
        email
      }
      reviewId
      review {
        id
        createdAt
        updatedAt
        body
        commitId
        submittedAt
        state
        requestId
      }
    }
  }
`;
export const listPullRequestReviewRequests = /* GraphQL */ `
  query ListPullRequestReviewRequests(
    $filter: ModelPullRequestReviewRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPullRequestReviewRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        dateFrom
        dateTo
        state
        repositoryId
        pullRequestId
        reviewerId
        requesterId
        reviewId
      }
      nextToken
    }
  }
`;
