/**
 * @generated SignedSource<<e506d8ec6391655072564419e28b4ada>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type userQuery$variables = Record<PropertyKey, never>;
export type userQuery$data = {
  readonly users: ReadonlyArray<{
    readonly email: string;
    readonly name: string;
    readonly phoneNumber: string | null | undefined;
  }> | null | undefined;
};
export type userQuery = {
  response: userQuery$data;
  variables: userQuery$variables;
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "phoneNumber",
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
    "name": "userQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "userQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6b2a829f1b51f8854470b4cc464c8988",
    "id": null,
    "metadata": {},
    "name": "userQuery",
    "operationKind": "query",
    "text": "query userQuery {\n  users {\n    name\n    email\n    phoneNumber\n  }\n}\n"
  }
};
})();

(node as any).hash = "cdff3bcdd6b357229d5c571559f3cb89";

export default node;
