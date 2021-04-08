/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGitHubIssue = /* GraphQL */ `
  subscription OnCreateGitHubIssue {
    onCreateGitHubIssue {
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
export const onUpdateGitHubIssue = /* GraphQL */ `
  subscription OnUpdateGitHubIssue {
    onUpdateGitHubIssue {
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
export const onDeleteGitHubIssue = /* GraphQL */ `
  subscription OnDeleteGitHubIssue {
    onDeleteGitHubIssue {
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
export const onCreateIssueAsignee = /* GraphQL */ `
  subscription OnCreateIssueAsignee {
    onCreateIssueAsignee {
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
export const onUpdateIssueAsignee = /* GraphQL */ `
  subscription OnUpdateIssueAsignee {
    onUpdateIssueAsignee {
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
export const onDeleteIssueAsignee = /* GraphQL */ `
  subscription OnDeleteIssueAsignee {
    onDeleteIssueAsignee {
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
export const onCreateGitHubLabel = /* GraphQL */ `
  subscription OnCreateGitHubLabel {
    onCreateGitHubLabel {
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
export const onUpdateGitHubLabel = /* GraphQL */ `
  subscription OnUpdateGitHubLabel {
    onUpdateGitHubLabel {
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
export const onDeleteGitHubLabel = /* GraphQL */ `
  subscription OnDeleteGitHubLabel {
    onDeleteGitHubLabel {
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
export const onCreateGitHubLabelIssueConnection = /* GraphQL */ `
  subscription OnCreateGitHubLabelIssueConnection {
    onCreateGitHubLabelIssueConnection {
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
export const onUpdateGitHubLabelIssueConnection = /* GraphQL */ `
  subscription OnUpdateGitHubLabelIssueConnection {
    onUpdateGitHubLabelIssueConnection {
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
export const onDeleteGitHubLabelIssueConnection = /* GraphQL */ `
  subscription OnDeleteGitHubLabelIssueConnection {
    onDeleteGitHubLabelIssueConnection {
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
export const onCreateGitHubOrganization = /* GraphQL */ `
  subscription OnCreateGitHubOrganization {
    onCreateGitHubOrganization {
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
export const onUpdateGitHubOrganization = /* GraphQL */ `
  subscription OnUpdateGitHubOrganization {
    onUpdateGitHubOrganization {
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
export const onDeleteGitHubOrganization = /* GraphQL */ `
  subscription OnDeleteGitHubOrganization {
    onDeleteGitHubOrganization {
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
export const onCreateGitHubPullRequest = /* GraphQL */ `
  subscription OnCreateGitHubPullRequest {
    onCreateGitHubPullRequest {
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
export const onUpdateGitHubPullRequest = /* GraphQL */ `
  subscription OnUpdateGitHubPullRequest {
    onUpdateGitHubPullRequest {
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
export const onDeleteGitHubPullRequest = /* GraphQL */ `
  subscription OnDeleteGitHubPullRequest {
    onDeleteGitHubPullRequest {
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
export const onCreatePullRequestAsignee = /* GraphQL */ `
  subscription OnCreatePullRequestAsignee {
    onCreatePullRequestAsignee {
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
export const onUpdatePullRequestAsignee = /* GraphQL */ `
  subscription OnUpdatePullRequestAsignee {
    onUpdatePullRequestAsignee {
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
export const onDeletePullRequestAsignee = /* GraphQL */ `
  subscription OnDeletePullRequestAsignee {
    onDeletePullRequestAsignee {
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
export const onCreatePullRequestReview = /* GraphQL */ `
  subscription OnCreatePullRequestReview {
    onCreatePullRequestReview {
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
export const onUpdatePullRequestReview = /* GraphQL */ `
  subscription OnUpdatePullRequestReview {
    onUpdatePullRequestReview {
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
export const onDeletePullRequestReview = /* GraphQL */ `
  subscription OnDeletePullRequestReview {
    onDeletePullRequestReview {
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
export const onCreatePullRequestReviewComment = /* GraphQL */ `
  subscription OnCreatePullRequestReviewComment {
    onCreatePullRequestReviewComment {
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
export const onUpdatePullRequestReviewComment = /* GraphQL */ `
  subscription OnUpdatePullRequestReviewComment {
    onUpdatePullRequestReviewComment {
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
export const onDeletePullRequestReviewComment = /* GraphQL */ `
  subscription OnDeletePullRequestReviewComment {
    onDeletePullRequestReviewComment {
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
export const onCreateGitHubRepository = /* GraphQL */ `
  subscription OnCreateGitHubRepository {
    onCreateGitHubRepository {
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
export const onUpdateGitHubRepository = /* GraphQL */ `
  subscription OnUpdateGitHubRepository {
    onUpdateGitHubRepository {
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
export const onDeleteGitHubRepository = /* GraphQL */ `
  subscription OnDeleteGitHubRepository {
    onDeleteGitHubRepository {
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
export const onCreateGitHubStar = /* GraphQL */ `
  subscription OnCreateGitHubStar {
    onCreateGitHubStar {
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
export const onUpdateGitHubStar = /* GraphQL */ `
  subscription OnUpdateGitHubStar {
    onUpdateGitHubStar {
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
export const onDeleteGitHubStar = /* GraphQL */ `
  subscription OnDeleteGitHubStar {
    onDeleteGitHubStar {
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
export const onCreateGitHubTeam = /* GraphQL */ `
  subscription OnCreateGitHubTeam {
    onCreateGitHubTeam {
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
export const onUpdateGitHubTeam = /* GraphQL */ `
  subscription OnUpdateGitHubTeam {
    onUpdateGitHubTeam {
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
export const onDeleteGitHubTeam = /* GraphQL */ `
  subscription OnDeleteGitHubTeam {
    onDeleteGitHubTeam {
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
export const onCreateGitHubTeamMembership = /* GraphQL */ `
  subscription OnCreateGitHubTeamMembership {
    onCreateGitHubTeamMembership {
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
export const onUpdateGitHubTeamMembership = /* GraphQL */ `
  subscription OnUpdateGitHubTeamMembership {
    onUpdateGitHubTeamMembership {
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
export const onDeleteGitHubTeamMembership = /* GraphQL */ `
  subscription OnDeleteGitHubTeamMembership {
    onDeleteGitHubTeamMembership {
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
export const onCreateGitHubTeamRepository = /* GraphQL */ `
  subscription OnCreateGitHubTeamRepository {
    onCreateGitHubTeamRepository {
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
export const onUpdateGitHubTeamRepository = /* GraphQL */ `
  subscription OnUpdateGitHubTeamRepository {
    onUpdateGitHubTeamRepository {
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
export const onDeleteGitHubTeamRepository = /* GraphQL */ `
  subscription OnDeleteGitHubTeamRepository {
    onDeleteGitHubTeamRepository {
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
export const onCreateGitHubUser = /* GraphQL */ `
  subscription OnCreateGitHubUser {
    onCreateGitHubUser {
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
export const onUpdateGitHubUser = /* GraphQL */ `
  subscription OnUpdateGitHubUser {
    onUpdateGitHubUser {
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
export const onDeleteGitHubUser = /* GraphQL */ `
  subscription OnDeleteGitHubUser {
    onDeleteGitHubUser {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      createdAt
      updatedAt
      login
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      createdAt
      updatedAt
      login
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      createdAt
      updatedAt
      login
    }
  }
`;
export const onCreatePullRequestReviewRequest = /* GraphQL */ `
  subscription OnCreatePullRequestReviewRequest {
    onCreatePullRequestReviewRequest {
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
export const onUpdatePullRequestReviewRequest = /* GraphQL */ `
  subscription OnUpdatePullRequestReviewRequest {
    onUpdatePullRequestReviewRequest {
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
export const onDeletePullRequestReviewRequest = /* GraphQL */ `
  subscription OnDeletePullRequestReviewRequest {
    onDeletePullRequestReviewRequest {
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
