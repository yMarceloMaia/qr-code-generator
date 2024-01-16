import { graphql } from "react-relay";

export const LoginMutation = graphql`
  mutation authLoginMutation($input: UserInputLogin!) {
    login(input: $input) {
      token
      user {
        name
        email
        phoneNumber
      }
    }
  }
`;

export const SignupMutation = graphql`
  mutation authSignupMutation($input: UserInput!) {
    signup(input: $input) {
      token
      user {
        name
        email
        phoneNumber
      }
    }
  }
`

export const AuthenticateMutation = graphql`
  mutation authAuthenticateMutation($token: String!) {
    authentication(token: $token) {
      id
      name
      iat
      exp
      authenticate
    }
  }
`