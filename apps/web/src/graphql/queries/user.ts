
import { graphql } from "react-relay";


export const UserQuery = graphql`
  query userQuery {
    users {
      name,
      email,
      phoneNumber
    }
  }
`
