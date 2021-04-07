/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

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

export type CreateGitHubRepositoryInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  nodeId: string,
  name: string,
  fullName: string,
  htmlUrl: string,
  description: string,
};

export type ModelGitHubRepositoryConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  nodeId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  htmlUrl?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelGitHubRepositoryConditionInput | null > | null,
  or?: Array< ModelGitHubRepositoryConditionInput | null > | null,
  not?: ModelGitHubRepositoryConditionInput | null,
};

export type GitHubRepository = {
  __typename: "GitHubRepository",
  id?: string,
  createdAt?: string,
  updatedAt?: string,
  nodeId?: string,
  name?: string,
  fullName?: string,
  htmlUrl?: string,
  description?: string,
};

export type UpdateGitHubRepositoryInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  nodeId?: string | null,
  name?: string | null,
  fullName?: string | null,
  htmlUrl?: string | null,
  description?: string | null,
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

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
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

export type ModelGitHubRepositoryFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  nodeId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  htmlUrl?: ModelStringInput | null,
  description?: ModelStringInput | null,
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
    htmlUrl: string,
    description: string,
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
    htmlUrl: string,
    description: string,
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
    htmlUrl: string,
    description: string,
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
    htmlUrl: string,
    description: string,
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
      htmlUrl: string,
      description: string,
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

export type OnCreateGitHubRepositorySubscription = {
  onCreateGitHubRepository?:  {
    __typename: "GitHubRepository",
    id: string,
    createdAt: string,
    updatedAt: string,
    nodeId: string,
    name: string,
    fullName: string,
    htmlUrl: string,
    description: string,
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
    htmlUrl: string,
    description: string,
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
    htmlUrl: string,
    description: string,
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
  } | null,
};
