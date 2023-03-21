/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPeenar = /* GraphQL */ `
  mutation CreatePeenar(
    $input: CreatePeenarInput!
    $condition: ModelPeenarConditionInput
  ) {
    createPeenar(input: $input, condition: $condition) {
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
export const updatePeenar = /* GraphQL */ `
  mutation UpdatePeenar(
    $input: UpdatePeenarInput!
    $condition: ModelPeenarConditionInput
  ) {
    updatePeenar(input: $input, condition: $condition) {
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
export const deletePeenar = /* GraphQL */ `
  mutation DeletePeenar(
    $input: DeletePeenarInput!
    $condition: ModelPeenarConditionInput
  ) {
    deletePeenar(input: $input, condition: $condition) {
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
export const createTaim = /* GraphQL */ `
  mutation CreateTaim(
    $input: CreateTaimInput!
    $condition: ModelTaimConditionInput
  ) {
    createTaim(input: $input, condition: $condition) {
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
export const updateTaim = /* GraphQL */ `
  mutation UpdateTaim(
    $input: UpdateTaimInput!
    $condition: ModelTaimConditionInput
  ) {
    updateTaim(input: $input, condition: $condition) {
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
export const deleteTaim = /* GraphQL */ `
  mutation DeleteTaim(
    $input: DeleteTaimInput!
    $condition: ModelTaimConditionInput
  ) {
    deleteTaim(input: $input, condition: $condition) {
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
export const createPostitus = /* GraphQL */ `
  mutation CreatePostitus(
    $input: CreatePostitusInput!
    $condition: ModelPostitusConditionInput
  ) {
    createPostitus(input: $input, condition: $condition) {
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
export const updatePostitus = /* GraphQL */ `
  mutation UpdatePostitus(
    $input: UpdatePostitusInput!
    $condition: ModelPostitusConditionInput
  ) {
    updatePostitus(input: $input, condition: $condition) {
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
export const deletePostitus = /* GraphQL */ `
  mutation DeletePostitus(
    $input: DeletePostitusInput!
    $condition: ModelPostitusConditionInput
  ) {
    deletePostitus(input: $input, condition: $condition) {
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
