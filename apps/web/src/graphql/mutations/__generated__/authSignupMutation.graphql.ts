/**
 * @generated SignedSource<<f2317537b7b1ca3b83d2445c0efde6a0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserInput = {
  email: string;
  name: string;
  password: string;
  phoneNumber?: string | null | undefined;
};
export type authSignupMutation$variables = {
  input: UserInput;
};
export type authSignupMutation$data = {
  readonly signup: {
    readonly token: string | null | undefined;
    readonly user: {
      readonly email: string;
      readonly name: string;
      readonly phoneNumber: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type authSignupMutation = {
  response: authSignupMutation$data;
  variables: authSignupMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AuthPayload",
    "kind": "LinkedField",
    "name": "signup",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "authSignupMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "authSignupMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "92cd04ddea30f8c173b8d42c73a01473",
    "id": null,
    "metadata": {},
    "name": "authSignupMutation",
    "operationKind": "mutation",
    "text": "mutation authSignupMutation(\n  $input: UserInput!\n) {\n  signup(input: $input) {\n    token\n    user {\n      name\n      email\n      phoneNumber\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "460145faa0545927c8bfcda0fc0ee616";

export default node;
