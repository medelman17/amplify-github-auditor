/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const getGitHubRepository = /* GraphQL */ `
  query GetGitHubRepository($id: ID!) {
    getGitHubRepository(id: $id) {
      id
      createdAt
      updatedAt
      nodeId
      name
      fullName
      htmlUrl
      description
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
        htmlUrl
        description
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
