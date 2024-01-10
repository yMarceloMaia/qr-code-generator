import './App.css'
import { RelayEnvironmentProvider, graphql, loadQuery, usePreloadedQuery, useLazyLoadQuery } from "react-relay";
import { RelayEnvironment } from "./services/RelayEnvironment";
import Test from './components/Test';

// const UserQuery = graphql`
//   query AppQuery {
//     users {
//       name
//     }
//   }
// `

function App() {
  // const loadedQuery = loadQuery(RelayEnvironment, UserQuery, {})

  // const data = usePreloadedQuery(UserQuery, loadedQuery);
  // const data = useLazyLoadQuery(UserQuery, {});
  // console.log(data)
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <h1>HELLO WORLD</h1>
      <Test></Test>
    </RelayEnvironmentProvider>
  )
}

export default App
