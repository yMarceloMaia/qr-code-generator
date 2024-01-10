/**
 * @generated SignedSource<<71f59f2bfc52e0ef44c499a53e50f5c2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TestQuery$variables = Record<PropertyKey, never>;
export type TestQuery$data = {
  readonly users: ReadonlyArray<{
    readonly name: string;
  }> | null | undefined;
};
export type TestQuery = {
  response: TestQuery$data;
  variables: TestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TestQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TestQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "fe906771e63dfaa67d88109648034be5",
    "id": null,
    "metadata": {},
    "name": "TestQuery",
    "operationKind": "query",
    "text": "query TestQuery {\n  users {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "886fecd3a8d9911ceef68ee53795e094";

export default node;
