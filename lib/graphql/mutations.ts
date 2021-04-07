/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      htmlUrl
      description
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
      htmlUrl
      description
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
      htmlUrl
      description
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
    }
  }
`;
