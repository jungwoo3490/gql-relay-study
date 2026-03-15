/**
 * @generated SignedSource<<837b864b2065cd7a2d3a759841b50a8b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmHeader_film$data = {
  readonly episodeID: number | null | undefined;
  readonly title: string | null | undefined;
  readonly " $fragmentType": "FilmHeader_film";
};
export type FilmHeader_film$key = {
  readonly " $data"?: FilmHeader_film$data;
  readonly " $fragmentSpreads": FragmentRefs<"FilmHeader_film">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FilmHeader_film",
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
    }
  ],
  "type": "Film",
  "abstractKey": null
};

(node as any).hash = "2b372e650b222d4b31af332d355aaf0a";

export default node;
