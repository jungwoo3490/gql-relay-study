/**
 * @generated SignedSource<<a8f7fc31e2429d1da6087f483b1bc932>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type TestQuery$variables = Record<PropertyKey, never>;
export type TestQuery$data = {
  readonly allFilms: {
    readonly films: ReadonlyArray<{
      readonly director: string | null | undefined;
      readonly title: string | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type TestQuery = {
  response: TestQuery$data;
  variables: TestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "director",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "FilmsConnection",
        "kind": "LinkedField",
        "name": "allFilms",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Film",
            "kind": "LinkedField",
            "name": "films",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "FilmsConnection",
        "kind": "LinkedField",
        "name": "allFilms",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Film",
            "kind": "LinkedField",
            "name": "films",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4611a1fe2ec5acf7dc2268d18f61fb77",
    "id": null,
    "metadata": {},
    "name": "TestQuery",
    "operationKind": "query",
    "text": "query TestQuery {\n  allFilms {\n    films {\n      title\n      director\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ccd342347dc067272c46ba2b5aaa84e1";

export default node;
