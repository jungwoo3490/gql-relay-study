/**
 * @generated SignedSource<<354005b1872134fdadece9f5e4d1899c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmMeta_film$data = {
  readonly director: string | null | undefined;
  readonly releaseDate: string | null | undefined;
  readonly " $fragmentType": "FilmMeta_film";
};
export type FilmMeta_film$key = {
  readonly " $data"?: FilmMeta_film$data;
  readonly " $fragmentSpreads": FragmentRefs<"FilmMeta_film">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FilmMeta_film",
  "selections": [
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
    }
  ],
  "type": "Film",
  "abstractKey": null
};

(node as any).hash = "e42b888c65df7bfd7253687964c739bc";

export default node;
