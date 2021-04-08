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
      labels {
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
export const getGitHubLabel = /* GraphQL */ `
  query GetGitHubLabel($id: ID!) {
    getGitHubLabel(id: $id) {
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
export const listGitHubLabels = /* GraphQL */ `
  query ListGitHubLabels(
    $filter: ModelGitHubLabelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGitHubLabels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        apiUrl
        name
        color
        default
      }
      nextToken
    }
  }
`;
export const getGitHubLabelIssueConnection = /* GraphQL */ `
  query GetGitHubLabelIssueConnection($id: ID!) {
    getGitHubLabelIssueConnection(id: $id) {
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
export const listGitHubLabelIssueConnections = /* GraphQL */ `
  query ListGitHubLabelIssueConnections(
    $filter: ModelGitHubLabelIssueConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGitHubLabelIssueConnections(
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
        issueId
        labelId
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
      description
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
        description
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
export const getGitHubStar = /* GraphQL */ `
  query GetGitHubStar($repositoryId: ID!, $userId: ID!) {
    getGitHubStar(repositoryId: $repositoryId, userId: $userId) {
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
export const listGitHubStars = /* GraphQL */ `
  query ListGitHubStars(
    $repositoryId: ID
    $userId: ModelIDKeyConditionInput
    $filter: ModelGitHubStarFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGitHubStars(
      repositoryId: $repositoryId
      userId: $userId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        createdAt
        updatedAt
        dateFrom
        dateTo
        repositoryId
        userId
      }
      nextToken
    }
  }
`;
export const getGitHubTeam = /* GraphQL */ `
  query GetGitHubTeam($id: ID!) {
    getGitHubTeam(id: $id) {
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
export const listGitHubTeams = /* GraphQL */ `
  query ListGitHubTeams(
    $filter: ModelGitHubTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGitHubTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
    }
  }
`;
export const getGitHubTeamMembership = /* GraphQL */ `
  query GetGitHubTeamMembership($id: ID!) {
    getGitHubTeamMembership(id: $id) {
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
export const listGitHubTeamMemberships = /* GraphQL */ `
  query ListGitHubTeamMemberships(
    $filter: ModelGitHubTeamMembershipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGitHubTeamMemberships(
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
        userId
        teamId
      }
      nextToken
    }
  }
`;
export const getGitHubTeamRepository = /* GraphQL */ `
  query GetGitHubTeamRepository($id: ID!) {
    getGitHubTeamRepository(id: $id) {
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
export const listGitHubTeamRepositorys = /* GraphQL */ `
  query ListGitHubTeamRepositorys(
    $filter: ModelGitHubTeamRepositoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGitHubTeamRepositorys(
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
        permission
        repositoryId
        teamId
      }
      nextToken
    }
  }
`;
export const getGitHubUser = /* GraphQL */ `
  query GetGitHubUser($id: ID!) {
    getGitHubUser(id: $id) {
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
export const listGitHubUsers = /* GraphQL */ `
  query ListGitHubUsers(
    $filter: ModelGitHubUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGitHubUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      createdAt
      updatedAt
      login
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        login
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
export const userByGitHubLogin = /* GraphQL */ `
  query UserByGitHubLogin(
    $login: String
    $sortDirection: ModelSortDirection
    $filter: ModelGitHubUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByGitHubLogin(
      login: $login
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
export const userByGitHubLoginFML = /* GraphQL */ `
  query UserByGitHubLoginFML(
    $login: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByGitHubLoginFML(
      login: $login
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        login
      }
      nextToken
    }
  }
`;
