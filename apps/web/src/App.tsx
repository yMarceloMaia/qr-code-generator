import './App.css'
import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./services/RelayEnvironment";
import { Router } from './Router';

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Router />
    </RelayEnvironmentProvider>
  )
}

export default App
