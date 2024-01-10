
import { RelayEnvironmentProvider, graphql, loadQuery, usePreloadedQuery, useLazyLoadQuery } from "react-relay";
import { RelayEnvironment } from "../services/RelayEnvironment";

const UserQuery = graphql`
  query TestQuery {
    users {
      name
    }
  }
`

function Test() {
  // const loadedQuery = loadQuery(RelayEnvironment, UserQuery, {})

  // const data = usePreloadedQuery(UserQuery, loadedQuery);
  const data = useLazyLoadQuery(UserQuery, {});
  console.log(data)
  return (
   <>
    <h1>TESTANDOOOOOOOOO</h1>
   </>
  )
}

export default Test
