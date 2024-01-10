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
    login(input: UserInputLogin): AuthPayload
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

  input UserInputLogin {
    email: String!
    password: String!
  }

  type AuthPayload {
    token: String
    user: User
  }
`

export default typeDefsUser