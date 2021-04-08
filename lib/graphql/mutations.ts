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
      labels {
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
      labels {
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
      labels {
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
export const createGitHubLabel = /* GraphQL */ `
  mutation CreateGitHubLabel(
    $input: CreateGitHubLabelInput!
    $condition: ModelGitHubLabelConditionInput
  ) {
    createGitHubLabel(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      apiUrl
      name
      color
      default
      issues {
        nextToken
      }
    }
  }
`;
export const updateGitHubLabel = /* GraphQL */ `
  mutation UpdateGitHubLabel(
    $input: UpdateGitHubLabelInput!
    $condition: ModelGitHubLabelConditionInput
  ) {
    updateGitHubLabel(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      apiUrl
      name
      color
      default
      issues {
        nextToken
      }
    }
  }
`;
export const deleteGitHubLabel = /* GraphQL */ `
  mutation DeleteGitHubLabel(
    $input: DeleteGitHubLabelInput!
    $condition: ModelGitHubLabelConditionInput
  ) {
    deleteGitHubLabel(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      apiUrl
      name
      color
      default
      issues {
        nextToken
      }
    }
  }
`;
export const createGitHubLabelIssueConnection = /* GraphQL */ `
  mutation CreateGitHubLabelIssueConnection(
    $input: CreateGitHubLabelIssueConnectionInput!
    $condition: ModelGitHubLabelIssueConnectionConditionInput
  ) {
    createGitHubLabelIssueConnection(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
      issueId
      issue {
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
      labelId
      label {
        id
        createdAt
        updatedAt
        apiUrl
        name
        color
        default
      }
    }
  }
`;
export const updateGitHubLabelIssueConnection = /* GraphQL */ `
  mutation UpdateGitHubLabelIssueConnection(
    $input: UpdateGitHubLabelIssueConnectionInput!
    $condition: ModelGitHubLabelIssueConnectionConditionInput
  ) {
    updateGitHubLabelIssueConnection(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
      issueId
      issue {
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
      labelId
      label {
        id
        createdAt
        updatedAt
        apiUrl
        name
        color
        default
      }
    }
  }
`;
export const deleteGitHubLabelIssueConnection = /* GraphQL */ `
  mutation DeleteGitHubLabelIssueConnection(
    $input: DeleteGitHubLabelIssueConnectionInput!
    $condition: ModelGitHubLabelIssueConnectionConditionInput
  ) {
    deleteGitHubLabelIssueConnection(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
      issueId
      issue {
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
      labelId
      label {
        id
        createdAt
        updatedAt
        apiUrl
        name
        color
        default
      }
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
      description
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
      description
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
      description
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
      stars {
        nextToken
      }
      teams {
        nextToken
      }
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
      stars {
        nextToken
      }
      teams {
        nextToken
      }
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
      stars {
        nextToken
      }
      teams {
        nextToken
      }
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
export const createGitHubStar = /* GraphQL */ `
  mutation CreateGitHubStar(
    $input: CreateGitHubStarInput!
    $condition: ModelGitHubStarConditionInput
  ) {
    createGitHubStar(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
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
      userId
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
export const updateGitHubStar = /* GraphQL */ `
  mutation UpdateGitHubStar(
    $input: UpdateGitHubStarInput!
    $condition: ModelGitHubStarConditionInput
  ) {
    updateGitHubStar(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
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
      userId
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
export const deleteGitHubStar = /* GraphQL */ `
  mutation DeleteGitHubStar(
    $input: DeleteGitHubStarInput!
    $condition: ModelGitHubStarConditionInput
  ) {
    deleteGitHubStar(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
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
      userId
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
export const createGitHubTeam = /* GraphQL */ `
  mutation CreateGitHubTeam(
    $input: CreateGitHubTeamInput!
    $condition: ModelGitHubTeamConditionInput
  ) {
    createGitHubTeam(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      name
      nodeId
      description
      slug
      privacy
      apiUrl
      htmlUrl
      membersUrl
      members {
        nextToken
      }
      repositories {
        nextToken
      }
    }
  }
`;
export const updateGitHubTeam = /* GraphQL */ `
  mutation UpdateGitHubTeam(
    $input: UpdateGitHubTeamInput!
    $condition: ModelGitHubTeamConditionInput
  ) {
    updateGitHubTeam(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      name
      nodeId
      description
      slug
      privacy
      apiUrl
      htmlUrl
      membersUrl
      members {
        nextToken
      }
      repositories {
        nextToken
      }
    }
  }
`;
export const deleteGitHubTeam = /* GraphQL */ `
  mutation DeleteGitHubTeam(
    $input: DeleteGitHubTeamInput!
    $condition: ModelGitHubTeamConditionInput
  ) {
    deleteGitHubTeam(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      name
      nodeId
      description
      slug
      privacy
      apiUrl
      htmlUrl
      membersUrl
      members {
        nextToken
      }
      repositories {
        nextToken
      }
    }
  }
`;
export const createGitHubTeamMembership = /* GraphQL */ `
  mutation CreateGitHubTeamMembership(
    $input: CreateGitHubTeamMembershipInput!
    $condition: ModelGitHubTeamMembershipConditionInput
  ) {
    createGitHubTeamMembership(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
      userId
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
      teamId
      team {
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
export const updateGitHubTeamMembership = /* GraphQL */ `
  mutation UpdateGitHubTeamMembership(
    $input: UpdateGitHubTeamMembershipInput!
    $condition: ModelGitHubTeamMembershipConditionInput
  ) {
    updateGitHubTeamMembership(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
      userId
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
      teamId
      team {
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
export const deleteGitHubTeamMembership = /* GraphQL */ `
  mutation DeleteGitHubTeamMembership(
    $input: DeleteGitHubTeamMembershipInput!
    $condition: ModelGitHubTeamMembershipConditionInput
  ) {
    deleteGitHubTeamMembership(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
      userId
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
      teamId
      team {
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
export const createGitHubTeamRepository = /* GraphQL */ `
  mutation CreateGitHubTeamRepository(
    $input: CreateGitHubTeamRepositoryInput!
    $condition: ModelGitHubTeamRepositoryConditionInput
  ) {
    createGitHubTeamRepository(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
      permission
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
      teamId
      team {
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
export const updateGitHubTeamRepository = /* GraphQL */ `
  mutation UpdateGitHubTeamRepository(
    $input: UpdateGitHubTeamRepositoryInput!
    $condition: ModelGitHubTeamRepositoryConditionInput
  ) {
    updateGitHubTeamRepository(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
      permission
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
      teamId
      team {
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
export const deleteGitHubTeamRepository = /* GraphQL */ `
  mutation DeleteGitHubTeamRepository(
    $input: DeleteGitHubTeamRepositoryInput!
    $condition: ModelGitHubTeamRepositoryConditionInput
  ) {
    deleteGitHubTeamRepository(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      dateFrom
      dateTo
      permission
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
      teamId
      team {
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
      teams {
        nextToken
      }
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
      teams {
        nextToken
      }
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
      teams {
        nextToken
      }
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      login
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      login
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      login
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
