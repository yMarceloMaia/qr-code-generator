/**
 * @generated SignedSource<<f50b3d679f833da1ab2d3feaae53cdfa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type authAuthenticateMutation$variables = {
  token: string;
};
export type authAuthenticateMutation$data = {
  readonly authentication: {
    readonly authenticate: boolean | null | undefined;
    readonly exp: string | null | undefined;
    readonly iat: string | null | undefined;
    readonly id: string | null | undefined;
    readonly name: string | null | undefined;
  } | null | undefined;
};
export type authAuthenticateMutation = {
  response: authAuthenticateMutation$data;
  variables: authAuthenticateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "token"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "token",
        "variableName": "token"
      }
    ],
    "concreteType": "PayloadAuth",
    "kind": "LinkedField",
    "name": "authentication",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
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
        "name": "iat",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "exp",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "authenticate",
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
    "name": "authAuthenticateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "authAuthenticateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e2bdd09cbf04e170d00bebf2b003cfb7",
    "id": null,
    "metadata": {},
    "name": "authAuthenticateMutation",
    "operationKind": "mutation",
    "text": "mutation authAuthenticateMutation(\n  $token: String!\n) {\n  authentication(token: $token) {\n    id\n    name\n    iat\n    exp\n    authenticate\n  }\n}\n"
  }
};
})();

(node as any).hash = "84ef739cfd5f8a58c6200d1bb6cf0a3f";

export default node;
