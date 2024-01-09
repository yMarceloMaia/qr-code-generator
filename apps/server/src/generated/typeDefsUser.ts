const typeDefsUser = `
  type Query {
    users: [User!]
    userByName(name: String!): User
    currentUser: User
  }

  type User {
    name: String!
    email: String!
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload
    signup(input: UserInput): AuthPayload
  }

  type User {
    name: String!
    email: String!
    phoneNumber: String
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
    phoneNumber: String
  }

  type AuthPayload {
    token: String
    user: User
  }
`

export default typeDefsUser