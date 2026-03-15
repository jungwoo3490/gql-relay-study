/**
 * @generated SignedSource<<1353154e378d061f1eb7cb8220aa93df>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmSummary_film$data = {
  readonly openingCrawl: string | null | undefined;
  readonly " $fragmentType": "FilmSummary_film";
};
export type FilmSummary_film$key = {
  readonly " $data"?: FilmSummary_film$data;
  readonly " $fragmentSpreads": FragmentRefs<"FilmSummary_film">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FilmSummary_film",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "openingCrawl",
      "storageKey": null
    }
  ],
  "type": "Film",
  "abstractKey": null
};

(node as any).hash = "c49d104593c75e8c0a5e254bcf708cc4";

export default node;
