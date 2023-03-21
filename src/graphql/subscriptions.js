/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePeenar = /* GraphQL */ `
  subscription OnCreatePeenar($filter: ModelSubscriptionPeenarFilterInput) {
    onCreatePeenar(filter: $filter) {
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
export const onUpdatePeenar = /* GraphQL */ `
  subscription OnUpdatePeenar($filter: ModelSubscriptionPeenarFilterInput) {
    onUpdatePeenar(filter: $filter) {
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
export const onDeletePeenar = /* GraphQL */ `
  subscription OnDeletePeenar($filter: ModelSubscriptionPeenarFilterInput) {
    onDeletePeenar(filter: $filter) {
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
export const onCreateTaim = /* GraphQL */ `
  subscription OnCreateTaim($filter: ModelSubscriptionTaimFilterInput) {
    onCreateTaim(filter: $filter) {
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
export const onUpdateTaim = /* GraphQL */ `
  subscription OnUpdateTaim($filter: ModelSubscriptionTaimFilterInput) {
    onUpdateTaim(filter: $filter) {
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
export const onDeleteTaim = /* GraphQL */ `
  subscription OnDeleteTaim($filter: ModelSubscriptionTaimFilterInput) {
    onDeleteTaim(filter: $filter) {
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
export const onCreatePostitus = /* GraphQL */ `
  subscription OnCreatePostitus($filter: ModelSubscriptionPostitusFilterInput) {
    onCreatePostitus(filter: $filter) {
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
export const onUpdatePostitus = /* GraphQL */ `
  subscription OnUpdatePostitus($filter: ModelSubscriptionPostitusFilterInput) {
    onUpdatePostitus(filter: $filter) {
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
export const onDeletePostitus = /* GraphQL */ `
  subscription OnDeletePostitus($filter: ModelSubscriptionPostitusFilterInput) {
    onDeletePostitus(filter: $filter) {
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
