import { Environment, Network, RecordSource, Store, FetchFunction } from "relay-runtime";

const url = "http://localhost:3003/graphql";


const fetchFn: FetchFunction = async (request, variables) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  const json = await response.json();

  return json;
};

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource()),
  });
}

export const RelayEnvironment = createRelayEnvironment();
