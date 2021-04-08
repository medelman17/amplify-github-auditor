/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGitHubIssue = /* GraphQL */ `
  mutation CreateGitHubIssue(
    $input: CreateGitHubIssueInput!
    $condition: ModelGitHubIssueConditionInput
  ) {
    createGitHubIssue(input: $input, condition: $condition) {
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
export const updateGitHubIssue = /* GraphQL */ `
  mutation UpdateGitHubIssue(
    $input: UpdateGitHubIssueInput!
    $condition: ModelGitHubIssueConditionInput
  ) {
    updateGitHubIssue(input: $input, condition: $condition) {
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
export const deleteGitHubIssue = /* GraphQL */ `
  mutation DeleteGitHubIssue(
    $input: DeleteGitHubIssueInput!
    $condition: ModelGitHubIssueConditionInput
  ) {
    deleteGitHubIssue(input: $input, condition: $condition) {
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
export const createIssueAsignee = /* GraphQL */ `
  mutation CreateIssueAsignee(
    $input: CreateIssueAsigneeInput!
    $condition: ModelIssueAsigneeConditionInput
  ) {
    createIssueAsignee(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
      issueId
      userId
      pullRequest {
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
      user {
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
    }
  }
`;
export const updateIssueAsignee = /* GraphQL */ `
  mutation UpdateIssueAsignee(
    $input: UpdateIssueAsigneeInput!
    $condition: ModelIssueAsigneeConditionInput
  ) {
    updateIssueAsignee(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
      issueId
      userId
      pullRequest {
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
      user {
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
    }
  }
`;
export const deleteIssueAsignee = /* GraphQL */ `
  mutation DeleteIssueAsignee(
    $input: DeleteIssueAsigneeInput!
    $condition: ModelIssueAsigneeConditionInput
  ) {
    deleteIssueAsignee(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
      issueId
      userId
      pullRequest {
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
      user {
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
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createGitHubOrganization = /* GraphQL */ `
  mutation CreateGitHubOrganization(
    $input: CreateGitHubOrganizationInput!
    $condition: ModelGitHubOrganizationConditionInput
  ) {
    createGitHubOrganization(input: $input, condition: $condition) {
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
export const updateGitHubOrganization = /* GraphQL */ `
  mutation UpdateGitHubOrganization(
    $input: UpdateGitHubOrganizationInput!
    $condition: ModelGitHubOrganizationConditionInput
  ) {
    updateGitHubOrganization(input: $input, condition: $condition) {
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
export const deleteGitHubOrganization = /* GraphQL */ `
  mutation DeleteGitHubOrganization(
    $input: DeleteGitHubOrganizationInput!
    $condition: ModelGitHubOrganizationConditionInput
  ) {
    deleteGitHubOrganization(input: $input, condition: $condition) {
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
export const createGitHubPullRequest = /* GraphQL */ `
  mutation CreateGitHubPullRequest(
    $input: CreateGitHubPullRequestInput!
    $condition: ModelGitHubPullRequestConditionInput
  ) {
    createGitHubPullRequest(input: $input, condition: $condition) {
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
export const updateGitHubPullRequest = /* GraphQL */ `
  mutation UpdateGitHubPullRequest(
    $input: UpdateGitHubPullRequestInput!
    $condition: ModelGitHubPullRequestConditionInput
  ) {
    updateGitHubPullRequest(input: $input, condition: $condition) {
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
export const deleteGitHubPullRequest = /* GraphQL */ `
  mutation DeleteGitHubPullRequest(
    $input: DeleteGitHubPullRequestInput!
    $condition: ModelGitHubPullRequestConditionInput
  ) {
    deleteGitHubPullRequest(input: $input, condition: $condition) {
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
export const createPullRequestAsignee = /* GraphQL */ `
  mutation CreatePullRequestAsignee(
    $input: CreatePullRequestAsigneeInput!
    $condition: ModelPullRequestAsigneeConditionInput
  ) {
    createPullRequestAsignee(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
      pullRequestId
      userId
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
      user {
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
    }
  }
`;
export const updatePullRequestAsignee = /* GraphQL */ `
  mutation UpdatePullRequestAsignee(
    $input: UpdatePullRequestAsigneeInput!
    $condition: ModelPullRequestAsigneeConditionInput
  ) {
    updatePullRequestAsignee(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
      pullRequestId
      userId
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
      user {
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
    }
  }
`;
export const deletePullRequestAsignee = /* GraphQL */ `
  mutation DeletePullRequestAsignee(
    $input: DeletePullRequestAsigneeInput!
    $condition: ModelPullRequestAsigneeConditionInput
  ) {
    deletePullRequestAsignee(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
      pullRequestId
      userId
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
      user {
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
    }
  }
`;
export const createPullRequestReview = /* GraphQL */ `
  mutation CreatePullRequestReview(
    $input: CreatePullRequestReviewInput!
    $condition: ModelPullRequestReviewConditionInput
  ) {
    createPullRequestReview(input: $input, condition: $condition) {
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
export const updatePullRequestReview = /* GraphQL */ `
  mutation UpdatePullRequestReview(
    $input: UpdatePullRequestReviewInput!
    $condition: ModelPullRequestReviewConditionInput
  ) {
    updatePullRequestReview(input: $input, condition: $condition) {
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
export const deletePullRequestReview = /* GraphQL */ `
  mutation DeletePullRequestReview(
    $input: DeletePullRequestReviewInput!
    $condition: ModelPullRequestReviewConditionInput
  ) {
    deletePullRequestReview(input: $input, condition: $condition) {
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
export const createPullRequestReviewComment = /* GraphQL */ `
  mutation CreatePullRequestReviewComment(
    $input: CreatePullRequestReviewCommentInput!
    $condition: ModelPullRequestReviewCommentConditionInput
  ) {
    createPullRequestReviewComment(input: $input, condition: $condition) {
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
export const updatePullRequestReviewComment = /* GraphQL */ `
  mutation UpdatePullRequestReviewComment(
    $input: UpdatePullRequestReviewCommentInput!
    $condition: ModelPullRequestReviewCommentConditionInput
  ) {
    updatePullRequestReviewComment(input: $input, condition: $condition) {
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
export const deletePullRequestReviewComment = /* GraphQL */ `
  mutation DeletePullRequestReviewComment(
    $input: DeletePullRequestReviewCommentInput!
    $condition: ModelPullRequestReviewCommentConditionInput
  ) {
    deletePullRequestReviewComment(input: $input, condition: $condition) {
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
export const createGitHubRepository = /* GraphQL */ `
  mutation CreateGitHubRepository(
    $input: CreateGitHubRepositoryInput!
    $condition: ModelGitHubRepositoryConditionInput
  ) {
    createGitHubRepository(input: $input, condition: $condition) {
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
export const updateGitHubRepository = /* GraphQL */ `
  mutation UpdateGitHubRepository(
    $input: UpdateGitHubRepositoryInput!
    $condition: ModelGitHubRepositoryConditionInput
  ) {
    updateGitHubRepository(input: $input, condition: $condition) {
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
export const deleteGitHubRepository = /* GraphQL */ `
  mutation DeleteGitHubRepository(
    $input: DeleteGitHubRepositoryInput!
    $condition: ModelGitHubRepositoryConditionInput
  ) {
    deleteGitHubRepository(input: $input, condition: $condition) {
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
export const createGitHubUser = /* GraphQL */ `
  mutation CreateGitHubUser(
    $input: CreateGitHubUserInput!
    $condition: ModelGitHubUserConditionInput
  ) {
    createGitHubUser(input: $input, condition: $condition) {
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
export const updateGitHubUser = /* GraphQL */ `
  mutation UpdateGitHubUser(
    $input: UpdateGitHubUserInput!
    $condition: ModelGitHubUserConditionInput
  ) {
    updateGitHubUser(input: $input, condition: $condition) {
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
export const deleteGitHubUser = /* GraphQL */ `
  mutation DeleteGitHubUser(
    $input: DeleteGitHubUserInput!
    $condition: ModelGitHubUserConditionInput
  ) {
    deleteGitHubUser(input: $input, condition: $condition) {
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
export const createPullRequestReviewRequest = /* GraphQL */ `
  mutation CreatePullRequestReviewRequest(
    $input: CreatePullRequestReviewRequestInput!
    $condition: ModelPullRequestReviewRequestConditionInput
  ) {
    createPullRequestReviewRequest(input: $input, condition: $condition) {
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
export const updatePullRequestReviewRequest = /* GraphQL */ `
  mutation UpdatePullRequestReviewRequest(
    $input: UpdatePullRequestReviewRequestInput!
    $condition: ModelPullRequestReviewRequestConditionInput
  ) {
    updatePullRequestReviewRequest(input: $input, condition: $condition) {
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
export const deletePullRequestReviewRequest = /* GraphQL */ `
  mutation DeletePullRequestReviewRequest(
    $input: DeletePullRequestReviewRequestInput!
    $condition: ModelPullRequestReviewRequestConditionInput
  ) {
    deletePullRequestReviewRequest(input: $input, condition: $condition) {
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
