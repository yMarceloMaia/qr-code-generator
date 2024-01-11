/**
 * @generated SignedSource<<0d19f2b9f66179895624edcf41267b19>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type QrcodeInput = {
  city: string;
  key: string;
  name: string;
  txtId?: string | null | undefined;
  value: string;
};
export type qrcodeCreatePayloadMutation$variables = {
  input?: QrcodeInput | null | undefined;
};
export type qrcodeCreatePayloadMutation$data = {
  readonly createPayload: {
    readonly payload: string | null | undefined;
  } | null | undefined;
};
export type qrcodeCreatePayloadMutation = {
  response: qrcodeCreatePayloadMutation$data;
  variables: qrcodeCreatePayloadMutation$variables;
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
    "concreteType": "Payload",
    "kind": "LinkedField",
    "name": "createPayload",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "payload",
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
    "name": "qrcodeCreatePayloadMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "qrcodeCreatePayloadMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "117b590760add75991be179c9d7dc593",
    "id": null,
    "metadata": {},
    "name": "qrcodeCreatePayloadMutation",
    "operationKind": "mutation",
    "text": "mutation qrcodeCreatePayloadMutation(\n  $input: QrcodeInput\n) {\n  createPayload(input: $input) {\n    payload\n  }\n}\n"
  }
};
})();

(node as any).hash = "0a541ea78167a64b80ea7ab785ba249c";

export default node;
