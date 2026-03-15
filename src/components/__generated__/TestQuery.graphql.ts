/**
 * @generated SignedSource<<66b07a0f2e8f82d2263beb957e95034f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TestQuery$variables = Record<PropertyKey, never>;
export type TestQuery$data = {
  readonly allFilms: {
    readonly films: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"FilmHeader_film" | "FilmMeta_film" | "FilmSummary_film">;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type TestQuery = {
  response: TestQuery$data;
  variables: TestQuery$variables;
};

const node: ConcreteRequest = {
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
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FilmHeader_film"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FilmMeta_film"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FilmSummary_film"
              }
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "episodeID",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "director",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "releaseDate",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "openingCrawl",
                "storageKey": null
              },
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
    "cacheID": "860cd3b97f8f570f8cdd866f37c9c5d4",
    "id": null,
    "metadata": {},
    "name": "TestQuery",
    "operationKind": "query",
    "text": "query TestQuery {\n  allFilms {\n    films {\n      ...FilmHeader_film\n      ...FilmMeta_film\n      ...FilmSummary_film\n      id\n    }\n  }\n}\n\nfragment FilmHeader_film on Film {\n  title\n  episodeID\n}\n\nfragment FilmMeta_film on Film {\n  director\n  releaseDate\n}\n\nfragment FilmSummary_film on Film {\n  openingCrawl\n}\n"
  }
};

(node as any).hash = "f72130d9cf0a3876ed82ef15a3bb5b4d";

export default node;
