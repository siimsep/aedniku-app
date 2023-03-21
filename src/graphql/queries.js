/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPeenar = /* GraphQL */ `
  query GetPeenar($id: ID!) {
    getPeenar(id: $id) {
      id
      name
      taimed {
        items {
          id
          title
          createdAt
          updatedAt
          peenarTaimedId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPeenars = /* GraphQL */ `
  query ListPeenars(
    $filter: ModelPeenarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeenars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        taimed {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTaim = /* GraphQL */ `
  query GetTaim($id: ID!) {
    getTaim(id: $id) {
      id
      title
      peenar {
        id
        name
        taimed {
          nextToken
        }
        createdAt
        updatedAt
      }
      postitus {
        items {
          id
          content
          createdAt
          updatedAt
          taimPostitusId
        }
        nextToken
      }
      createdAt
      updatedAt
      peenarTaimedId
    }
  }
`;
export const listTaims = /* GraphQL */ `
  query ListTaims(
    $filter: ModelTaimFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaims(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        peenar {
          id
          name
          createdAt
          updatedAt
        }
        postitus {
          nextToken
        }
        createdAt
        updatedAt
        peenarTaimedId
      }
      nextToken
    }
  }
`;
export const getPostitus = /* GraphQL */ `
  query GetPostitus($id: ID!) {
    getPostitus(id: $id) {
      id
      taim {
        id
        title
        peenar {
          id
          name
          createdAt
          updatedAt
        }
        postitus {
          nextToken
        }
        createdAt
        updatedAt
        peenarTaimedId
      }
      content
      createdAt
      updatedAt
      taimPostitusId
    }
  }
`;
export const listPostituses = /* GraphQL */ `
  query ListPostituses(
    $filter: ModelPostitusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostituses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        taim {
          id
          title
          createdAt
          updatedAt
          peenarTaimedId
        }
        content
        createdAt
        updatedAt
        taimPostitusId
      }
      nextToken
    }
  }
`;
